import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { fetchContacts, setCurrentElem } from '../redux/actions/contacts';

import { ContactCard } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingBlock: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  loadingText: {
    fontSize: 22,
    fontWeight: 'bold',
  }
});

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const contactsData = useSelector(({ contacts }) => contacts.contactsData);
  const isLoaded = useSelector(({ contacts }) => contacts.isLoaded);

  const onClickContact = (item, index = 0) => {
    navigation.navigate("Contact", { item });
    dispatch(setCurrentElem(index));
  }

  const renderContactCardItems = ({ item, index }) => (
    <TouchableOpacity onPress={ () => onClickContact(item, index) }>
      <ContactCard id={ item.id } name={ item.name } email={ item.email }  />
    </TouchableOpacity>
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <SafeAreaView style={ styles.container }>
      {isLoaded ? (
        <FlatList
          data={ contactsData }
          renderItem={ renderContactCardItems }
          keyExtractor={ (item) => String(item.id) }
        />
      ) : (
        <View style={ styles.loadingBlock }>
          <Text style={ styles.loadingText }>Loading...</Text>
        </View>
      )
      }
    </SafeAreaView>
  );
};

export default HomeScreen;
