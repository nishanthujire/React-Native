import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TextInputComponent = ({defaultValue,keyboardType}) => {
  return (
     <TextInput
         style={{
            height:40,
            borderColor:'red',
            borderWidth:1 
         }}
         defaultValue={defaultValue}
         keyboardType={keyboardType}
        
     
     
     />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({});
