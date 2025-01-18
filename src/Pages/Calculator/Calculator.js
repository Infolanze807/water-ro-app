import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from "../../Components/Colors/Colors";
import { Feather } from "@expo/vector-icons";
import { printToFileAsync } from 'expo-print';
import * as Sharing from 'expo-sharing';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "@env";

const Calculator = () => {
  const [tds, setTds] = useState("");
  const [tds2, setTds2] = useState("");
  const [hardness, setHardness] = useState("");
  const [hardness2, setHardness2] = useState("");
  const [flow, setFlow] = useState("");
  const [obr, setObr] = useState('');
  const [hours, setHours] = useState("");
  const [ph, setPh] = useState("");
  const [resinQ, setResinQ] = useState('');
  const [seltQ, setSeltQ] = useState("");
  const [hourFrq, setHourFrq] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [user1, setUser] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userId, setUserId] = useState("");
 
  const getResinType = (hardness) => {
    if (hardness >= 100 && hardness <= 600) {
      return 'ECO 44';
    } else if (hardness > 600 && hardness <= 800) {
      return 'CSA 121';
    } else if (hardness > 800 && hardness <= 1200) {
      return 'CSA 9NA';
    } else {
      return 'Please Select Hardness 100 To 1200';
    }
  };

  const getSaltRequirement = (hardness) => {
  
    if (hardness <= 400) {
      return 150;
    } else if (hardness > 400 && hardness < 600) {
      return 160;
    } else if (hardness >= 600 && hardness < 800) {
      return 180;
    } else if (hardness >= 800) {
      return 200;
    }
  };

  const getRegenerationFrequency = (hours) => {
  
    if (hours <= 10) {
      return "TWICE A DAY";
    } else if (hours <= 22) {
      return "ONCE A DAY";
    } else if (hours <= 70) {
      return "ONCE IN 3 DAYS";
    } else if (hours <= 166) {
      return "ONCE IN A WEEK";
    }
  };
  

  const handleCalculate = async () => {
    const flowValue = parseFloat(flow);
    const hoursValue = parseFloat(hours);
    const hardnessValue = parseFloat(hardness);
    const tdsValue = parseFloat(tds);

    if (!isNaN(flowValue) && !isNaN(hoursValue) && !isNaN(hardnessValue)) {
        const obrValue = flowValue * hoursValue;
        const resinQValue = obrValue * hardnessValue / (55 * 1000);
        const seltQValue = (resinQValue * getSaltRequirement(hardnessValue)) / 1000;

        setHardness2(getResinType(hardnessValue));
        setHourFrq(getRegenerationFrequency(hoursValue));
        setTds2(tdsValue.toFixed(2));
        setObr(obrValue.toFixed(2));
        setResinQ(resinQValue.toFixed(2));
        setSeltQ(seltQValue.toFixed(2));
        setIsCalculated(true);

        const result = {
          tds: tdsValue.toFixed(2),
          resinSuggested: getResinType(hardnessValue),
          regenerationFrequency: getRegenerationFrequency(hoursValue),
          OBR: obrValue.toFixed(2),
          ResinVolumeLiters: resinQValue.toFixed(2),
          saltQuantityKg: seltQValue.toFixed(2),
      };

        try {
            const res = await axios.post(`${API_URL}/auth/addCalculatorLogs`, {
                userId: userId,
                ph: ph,
                tds: tds,
                flow: flow,
                operationalHours: hours,
                waterHardness: hardness,
                result,
            });

            if (res.status >= 400) {
                console.error("Error response from API:", res.data);
                toast.error(
                    `Error submitting data to the server: ${
                        res.data?.message || "Unknown error"
                    }`
                );
                return;
            }
        } catch (error) {
            console.error("Network/API error:", error.message);
            // alert("Unable to connect to the server. Please try again later.");
        }

    } else {
        alert("Please enter valid numeric values for all inputs.");
    }
};

const handleCalculateClear = () => {
  setTds("");
  setTds2("");
  setHardness("");
  setHardness2("");
  setFlow("");
  setObr("");
  setHours("");
  setPh("");
  setResinQ("");
  setSeltQ("");
  setHourFrq("");
  setIsCalculated(false);
}


const getAuthData = async () => {
  const storedAuthData = await AsyncStorage.getItem('userName');
  const storedAuthNumber = await AsyncStorage.getItem('userNumber');
  const storedAuthId = await AsyncStorage.getItem('userId');
  if (storedAuthData || storedAuthNumber || storedAuthId) {
    setUser(storedAuthData);
    setUserNumber(storedAuthNumber);
    setUserId(storedAuthId);
  } else {
    setUser("");
    setUserNumber('');
    setUserId('');
  }
};

useFocusEffect(
    React.useCallback(() => {
      getAuthData();
      handleCalculateClear();
    }, [])
  );

  const generatePdf = async () => {
    if (!isCalculated) {
      alert("Please calculate the values before generating the PDF.");
      return;
    }
    try {
      
      const htmlContent = `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                padding: 20px;
                color: #333;
              }
              h1 {
                text-align: center;
                color: #3034E9;
                margin-bottom: 30px;
              }
              .container {
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
              }
              .section-title {
                font-size: 18px;
                margin: 20px 0 10px;
                color: #222;
                text-transform: uppercase;
                border-bottom: 2px solid #3034E9;
                padding-bottom: 5px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
              }
              th, td {
                border: 1px solid #ddd;
                text-align: left;
                padding: 8px;
              }
              th {
                background-color: #3034E9;
                color: white;
              }
              .summary-row {
                background-color: #f9f9f9;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <h1>Doshion Techcenter</h1>
            <div class="container">
              <p><strong>Company Name:</strong> ${user1}</p>
              <p><strong>Number:</strong> ${userNumber}</p>
  
              <div>
                <h2 class="section-title">Inputs</h2>
                <table>
                  <tr>
                    <th>Parameter</th>
                    <th>Value</th>
                  </tr>
                  <tr><td>PH</td><td>${ph}</td></tr>
                  <tr><td>TDS</td><td>${tds}</td></tr>
                  <tr><td>Flow (LPH)</td><td>${flow}</td></tr>
                  <tr><td>Operational Hours (Hrs)</td><td>${hours}</td></tr>
                  <tr><td>Water Hardness (ppm as CaCO3)</td><td>${hardness}</td></tr>
                </table>
              </div>
  
              <div>
                <h2 class="section-title">Outputs</h2>
                <table>
                  <tr><th>Parameter</th><th>Value</th></tr>
                  <tr><td>TDS</td><td>${tds2}</td></tr>
                  <tr><td>Resin Suggested</td><td>${hardness2}</td></tr>
                  <tr><td>Regeneration Frequency</td><td>${hourFrq}</td></tr>
                  <tr><td>OBR</td><td>${obr}</td></tr>
                  <tr><td>Resin Volume (Liters)</td><td>${resinQ}</td></tr>
                  <tr><td>Salt Quantity (Kg NaCl)</td><td>${seltQ}</td></tr>
                </table>
              </div>
            </div>
          </body>
        </html>
      `;
  
      const file = await printToFileAsync({
        html: htmlContent,
        base64: false,
      });
  
      if (file.uri) {
        await Sharing.shareAsync(file.uri);
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };
  



  return (
    <View>
      <View style={{ backgroundColor: colors.white }}>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 23,
            marginLeft: 6,
            paddingTop: 15,
            paddingBottom: 5,
            color: colors.black,
            fontFamily: "outfit-medium",
          }}
        >
          Calculator
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Water Treatment Calculator</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>PH &nbsp;
              <TouchableOpacity
              onPress={() => setShowTooltip(!showTooltip)}
              style={styles.tooltipIcon}
              >
                <Text style={styles.questionMark}>?</Text>
              </TouchableOpacity>
            </Text>

            {showTooltip && (
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>ph range is from 0 to 14.</Text>
              </View>
            )}
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={ph}
              onChangeText={setPh}
              placeholder="Enter PH"
              placeholderTextColor={colors.placeholder}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>TDS</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={tds}
              onChangeText={setTds}
              placeholder="Enter TDS"
              placeholderTextColor={colors.placeholder}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Flow (LPH)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={flow}
              onChangeText={setFlow}
              placeholder="Enter Flow"
              placeholderTextColor={colors.placeholder}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Operational Hours (Hrs)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={hours}
              onChangeText={setHours}
              placeholder="Enter Hours"
              placeholderTextColor={colors.placeholder}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Water Hardness (ppm as CaCO3)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={hardness}
              onChangeText={setHardness}
              placeholder="Enter Hardness"
              placeholderTextColor={colors.placeholder}
            />
          </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            <TouchableOpacity style={styles.button1} onPress={handleCalculateClear}>
            <Text style={styles.buttonText}>Clear <AntDesign  name="close" size={15} /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={handleCalculate}>
            <Text style={styles.buttonText}>Calculate <MaterialCommunityIcons name="calculator" size={15} /></Text>
          </TouchableOpacity>
            </View>

          <View style={styles.resultsContainer}>
            <Result label="TDS :" value={tds2} />
            <Result label="Resin Suggested :" value={hardness2} />
            <Result label="Regeneration Frequency :" value={hourFrq} />
            <Result label="OBR :" value={obr} />
            <Result label="Resin Volume (Liters) :" value={resinQ} />
            <Result label="Salt Quantity (Kg NaCl) :" value={seltQ} />
          </View>

          <TouchableOpacity style={styles.button} onPress={generatePdf}>
            <Text style={styles.buttonText1}>Download PDF  <Feather name="download" size={15} /></Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
};

const Result = ({ label, value }) => (
  <View style={styles.resultItem}>
    <Text style={styles.resultLabel}>{label}</Text>
    <Text style={styles.resultValue}>{value}</Text>
  </View>
);

export default Calculator;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    width: "100%",
    maxWidth: 600, 
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
    color: colors.primary,
    fontFamily: "outfit-bold",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.text,
    fontFamily: "outfit",
  },
  tooltipIcon: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 17,
    height: 17,
  },
  questionMark: {
    fontSize: 12,
    color: colors.primary,
  },
  tooltip: {
    position: 'absolute',
    top: -5,
    left: 50,
    padding: 5,
    backgroundColor: '#333',
    borderRadius: 5,
    width: 170,
    zIndex: 1,
  },
  tooltipText: {
    color: 'white',
    fontSize: 14,
  },
  range: {
    fontSize: 10,
    color: "red"
  },
  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 14,
    color: colors.text,
    fontFamily: "outfit",
  },
  pickerContainer: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    height: 45,
    width: "100%",
  },
  button1: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "50%",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "outfit",
  },
  buttonText1: {
    color: "white",
    fontSize: 16,
    fontFamily: "outfit",
  },
  resultsContainer: {
    width: "100%",
    marginTop: 30,
    fontFamily: "outfit",
  },
  resultItem: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 12,
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  resultLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontFamily: "outfit",
  },
  resultValue: {
    fontSize: 14,
    color: 'green',
    fontFamily: "outfit",
  },
});
