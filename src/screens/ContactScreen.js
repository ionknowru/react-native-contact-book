import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  contactInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleDecoration: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textDecoration: {
    fontSize: 18,
    fontWeight: 'normal'
  }
});

const ContactScreen = ({ route }) => {
  const { id, name, email } = route.params.item;

  return (
    <View style={ styles.container } >
      <View style={ styles.contactInfo }>
        <Text style={ styles.titleDecoration }>{ name }</Text>
        <Text style={ styles.textDecoration }>{ email }</Text>
      </View>
      <Text style={ styles.titleDecoration }>{ id }</Text>
    </View>
  );
}

export default ContactScreen;