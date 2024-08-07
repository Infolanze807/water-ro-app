import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Calculator = () => {

  const [exchangeCapacity, setExchangeCapacity] = useState('55');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Flow (LPH)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Operating Hours (Hrs)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Water Hardness (mg/L)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
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
      <View className='pt-4'>
      <Button title="Calculate"  onPress={() => {}} />
      </View>
        <View className='flex gap-3 pt-10'>
        <View>
          <Text className='border-b-[1px] text-gray-500'>Resin quantity(Liters)</Text>
          <Text>0</Text>
        </View>
        <View>
          <Text className='border-b-[1px] text-gray-500'>OBR(Liters)</Text>
          <Text>0</Text>
        </View>
        <View>
          <Text className='border-b-[1px] text-gray-500'>Salt required for regeneration(Kg NaCl)</Text>
          <Text>0</Text>
        </View>
        <View>
          <Text className='border-b-[1px] text-gray-500'>Water required for regeneration(Liters)</Text>
          <Text>0</Text>
        </View>
        </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'white',
    height:'100%'
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    width: '100%',
  },
});
