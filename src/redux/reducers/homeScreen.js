// * Редьюсер для привязки экранов к редаксу (не выполнил)

const initialState = {
  homeScreenState: true,
}

const homeScreen = (state = initialState, action) => {
  switch(action.type) {
    case 'ROUTE_HOME_SCREEN':
      return {
        ...state,
        homeScreenState: false
      }

    default:
      return state;
  }
}

export default homeScreen;