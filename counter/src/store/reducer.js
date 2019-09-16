const initialState = {
  result: 20,
  historique: [],
  userLoading: false,
  userSuccess: null,
  userError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_UN":
      return {
        ...state,
        result: state.result + 1
      };
    case "DECREASE_UN":
      return {
        ...state,
        result: state.result - 1
      };
    case "ADD":
      return {
        ...state,
        result: state.result + action.val
      };
    case "SUBSTRACT":
      return {
        ...state,
        result: state.result - action.val
      };
    case "CREER_HISTORIQUE":
      return {
        ...state,
        historique: state.historique.concat(state.result)
      };
    case "USER_LAUNCHED":
      return {
        ...state,
        userLoading: true,
        userSuccess: null,
        userError: null
      };
    case "USER_SUCCESS":
      return {
        ...state,
        userLoading: false,
        userSuccess: action.user,
        userError: null
      };
    case "USER_ERROR":
      return {
        ...state,
        userLoading: false,
        userSuccess: null,
        userError: action.error
      };
  }
  return state;
};

export default reducer;
