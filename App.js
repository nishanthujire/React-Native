import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import TextInputComponent from './src/components/TextInputComponent';

const App = () => {
  const [name, setName] = useState('');
  const [num, setNum] = useState(0);
  
  return (
    <View style={{margin: 10}}>
      {/* <TextInputComponent defaultValue="Enter name"  keyboardType="default"/>
      <TextInputComponent defaultValue="Enter number" keyboardType="numeric"/>

      <Text>Hy {name}</Text> */}
      {/* 
      <TextInput
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 1,
          marginBottom:10,
        }}
        placeholder='Enter name'
        value={name}
        onChangeText={(value) => {
          console.log("onchange called");
          console.log("value is",value);
          setName(value)

        }}
      />
      <Button title='submit'  /> */}
      <Text style={{fontSize: 20, marginBottom: 10}}>{num}</Text>
      <Button
        title="increase"
        onPress={() => {
          setNum(num + 1);
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
