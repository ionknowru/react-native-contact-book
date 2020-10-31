// * Редьюсер для привязки экранов к редаксу (не выполнил)

const initialState = {
  contactScreenState: false
}

const contactScreen = (state = initialState, action) => {
  switch(action.type) {
    case 'ROUTE_CONTACT_SCREEN':
      return {
        ...state,
        contactScreenState: true
      }

    default:
      return state;
  }
}

export default contactScreen;