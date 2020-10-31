import axios from 'axios';

export const setLoaded = ( payload ) => ({
  type: 'SET_LOADED',
  payload: payload
})

export const fetchContacts = () => (dispatch) => {
  dispatch(setLoaded(false));

  axios.get('https://jsonplaceholder.typicode.com/users/').then(({ data }) => {
    dispatch(setContacts(data));
  });
}

export const setContacts = ( contactsData ) => ({
  type: 'SET_CONTACTS',
  payload: contactsData
});

export const setCurrentElem = ( index ) => ({
  type: 'SET_CURRENT_ELEM',
  payload: index
})