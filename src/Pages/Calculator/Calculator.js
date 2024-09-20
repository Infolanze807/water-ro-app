import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../../Components/Colors/Colors'; // Assuming colors is defined

const Calculator = () => {
  const [exchangeCapacity, setExchangeCapacity] = useState('55');
  const [flow, setFlow] = useState('');
  const [hours, setHours] = useState('');
  const [hardness, setHardness] = useState('');

  const handleCalculate = () => {
    // Add your calculation logic here
  };

  return (
    <View>
      <View style={{backgroundColor:colors.white}}>
        <Text style={{ fontWeight: "500",
    fontSize: 23,
    marginLeft: 6,
    paddingTop:35,
    color: colors.black,
    fontFamily: "outfit-medium",}}>Calculator</Text>
      </View>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Water Treatment Calculator</Text>
        
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
          <Text style={styles.label}>Operating Hours (Hrs)</Text>
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
          <Text style={styles.label}>Water Hardness (mg/L)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={hardness}
            onChangeText={setHardness}
            placeholder="Enter Hardness"
            placeholderTextColor={colors.placeholder}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Exchange Capacity (g/L)</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={exchangeCapacity}
              style={styles.picker}
              onValueChange={(itemValue) => setExchangeCapacity(itemValue)}
            >
              <Picker.Item label="55" value="55" />
              <Picker.Item label="60" value="60" />
              <Picker.Item label="65" value="65" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        
        <View style={styles.resultsContainer}>
          <Result label="Resin quantity (Liters)" value="0" />
          <Result label="OBR (Liters)" value="0" />
          <Result label="Salt required for regeneration (Kg NaCl)" value="0" />
          <Result label="Water required for regeneration (Liters)" value="0" />
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: 20,
    paddingBottom:80
  },
  card: {
    width: '100%',
    maxWidth: 600, // Constrain width on large screens
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    textAlign:'center',
    marginBottom: 20,
    color: colors.primary,
    fontFamily:'outfit-bold'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.text,
    fontFamily:'outfit'

  },
  input: {
    height: 45,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    color: colors.text,
    fontFamily:'outfit'
  },
  pickerContainer: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 45,
    width: '100%',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily:'outfit'
  },
  resultsContainer: {
    width: '100%',
    marginTop: 30,
    fontFamily:'outfit'
  },
  resultItem: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    fontFamily:'outfit'
  }, 
  resultValue: {
    fontSize: 16,
    color: colors.text,
    fontFamily:'outfit'
  },
});