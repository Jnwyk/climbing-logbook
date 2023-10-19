import "./App.css";
import { useReducer } from "react";
import AddAscentCard from "./components/AddAscentCard";
import Modal from "./components/Modal";

function reducer(state, action){
  if(action.type === 'open_modal'){
    return {...state, isModalOpened: true}
  }
  else if(action.type === 'close_modal'){
    return {...state, isModalOpened: false}
  }
  else if(action.type === 'change_ascent'){
    return {...state, ascent: {...state.ascent, ...action.object}}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {ascent: { routeName: "", area: "", style: "", grade: ""}, isModalOpened: false})

  const submitForm = () => {
    console.log(state.ascent)
    dispatch({type: "close_modal"})
  }

  return (
    <>
      <AddAscentCard onClick={() => dispatch({type: 'open_modal'})} />
      <Modal
        data = {state.ascent}
        modalIsOpen={state.isModalOpened}
        onChange={(name, value) => dispatch({type: 'change_ascent', object: {[name]: value}})}
        closeModal={() => dispatch({type: 'close_modal'})}
        submitForm ={submitForm}
      />
    </>
  );
}

export default App;
