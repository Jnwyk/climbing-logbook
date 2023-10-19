import "./App.css";
import { useReducer } from "react";
import Modal from "./components/Modal";
import AscentList from "./components/AscentList";

function reducer(state, action) {
  if (action.type === "open_modal") {
    return { ...state, isModalOpened: true };
  } else if (action.type === "close_modal") {
    return { ...state, isModalOpened: false };
  } else if (action.type === "change_ascent") {
    return { ...state, newAscent: { ...state.newAscent, ...action.object } };
  } else if (action.type === "add_ascent") {
    return {
      ...state,
      ascentArray: action.newAscentArray,
      newAscent: { routeName: "", area: "", style: "", grade: "III" },
    };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    newAscent: { routeName: "", area: "", style: "", grade: "III" },
    isModalOpened: false,
    ascentArray: JSON.parse(localStorage.getItem("ascents")) || [],
  });

  const submitForm = () => {
    const ascentId = state.ascentArray.length;
    const ascent = { id: ascentId, ...state.newAscent };
    const ascentArray = JSON.parse(localStorage.getItem("ascents")) || [];
    ascentArray.push(ascent);
    localStorage.setItem("ascents", JSON.stringify(ascentArray));
    dispatch({ type: "add_ascent", newAscentArray: ascentArray });
    dispatch({ type: "close_modal" });
  };

  return (
    <>
      <AscentList
        addAscent={() => dispatch({ type: "open_modal" })}
        ascentArray={state.ascentArray}
      />
      <Modal
        data={state.newAscent}
        modalIsOpen={state.isModalOpened}
        onChange={(name, value) =>
          dispatch({ type: "change_ascent", object: { [name]: value } })
        }
        closeModal={() => dispatch({ type: "close_modal" })}
        submitForm={submitForm}
      />
    </>
  );
}

export default App;
