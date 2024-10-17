import StateLoader from "./stateloader";

const stateLoader = new StateLoader();

function user(state = {}, action) {
  try{
      switch (action.type) {
      case 'set':
        console.log("reaced set")
        let state1 = Object.assign({}, state);
        state1[action.key] = action.value
        console.log(state1,state)
        return state1
      case "get":
        return state[action.key]  
      case "pop":
        return state[action.key]
      case 'override':
        state = action.data
        return state
      default:
        return state
    }
  }
  catch(err){
    return state
  }
  
}
const store = configureStore({reducer:user,preloadedState:stateLoader.loadState()})
store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

export default store;