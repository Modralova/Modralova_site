

const initialState = { logged: false }



const loginReducer = (state = initialState, action) => {

    switch (action.type) {
      case "LOG_IN":
  
        return { logged: state.logged = true }
  
      case "LOG_OUT":
  
        return { logged: state.logged = false }
  
  
      default:
  
        return state;
  
    }
  
  }


  const login =  {
  
    type: "LOG_IN",
    info: "logged in"
  
}

const logout =  {
  
    type: "LOG_OUT",
    info: "logged out"
  
}



export {loginReducer, login, logout}