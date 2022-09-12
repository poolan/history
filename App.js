import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [data, setData] = React.useState([]);

  const plusButton = () => {
    const add = parseFloat(number1) + parseFloat(number2);
    setResult(add);
    setData([...data, { key: `${number1} + ${number2} = ${add}` }]);
  };
  const minusButton = () => {
    const sub = parseFloat(number1) - parseFloat(number2);
    setResult(sub);
    setData([...data, { key: `${number1} - ${number2} = ${sub}` }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Result = {result} </Text>
        <TextInput
          keyboardType="numeric"
          value={number1}
          onChangeText={(txt) => setNumber1(txt)}
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          value={number2}
          onChangeText={(txt) => setNumber2(txt)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={plusButton} />
        <Button title="-" onPress={minusButton} />
      </View>
      <View style={styles.historyContainer}>
        <Text> History</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    
  },

  buttonContainer: {
    marginBottom: 20,
    marginTop:0,
    width: 60,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    fontSize: 20,
    width: 170,
    borderColor: "gray",
    borderWidth: 1,
  
  },
  historyContainer: {
    flex: 2,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});