const initialState = {
  currentElement: 0,
  contactsData: [],
  isLoaded: false
}

const contacts = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_CONTACTS':
      return {
        ...state,
        contactsData: action.payload,
        isLoaded: true
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload
      }

    case 'SET_CURRENT_ELEM':
      return {
        ...state,
        currentElement: action.payload
      }

    default:
      return state;
  }
}

export default contacts;