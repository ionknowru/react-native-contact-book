import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#8696ba',
  },
  textDecoration: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  idBlock: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const ContactCard = ({ id, name, email }) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.textBlock }>
        <Text style={ styles.textDecoration }>{ name }</Text>
        <Text style={ styles.textDecoration }>{ email }</Text>
      </View>
      <View style={ styles.idBlock }>
        <Text style={ styles.textDecoration }>{ id }</Text>
      </View>
    </View>
  );
}

export default ContactCard;