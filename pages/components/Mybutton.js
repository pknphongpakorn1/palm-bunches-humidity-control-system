/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const BLACK = "#000000";
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    borderRadius: 45,
    alignItems: 'center',
    backgroundColor: '#cccc00',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    shadowOpacity: 1,
		shadowRadius: 30,
		shadowColor: BLACK,
		shadowOffset: { height: 0, width: 0.5 }
  },
  text: {
    textAlign: "center",
    color: '#ffffff',
  },
});
export default Mybutton;