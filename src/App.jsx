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
  } else if (action.type === "alter_ascents") {
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
    dispatch({ type: "alter_ascents", newAscentArray: ascentArray });
    dispatch({ type: "close_modal" });
  };

  const isButtonDisabled = () => {
    if (
      state.newAscent.routeName === "" ||
      state.newAscent.area === "" ||
      state.newAscent.style === ""
    )
      return true;
    return false;
  };

  const removeAscent = (id) => {
    let ascentArray = JSON.parse(localStorage.getItem("ascents"));
    const ascent = ascentArray.find((ascent) => ascent.id === id);
    ascentArray = ascentArray.filter((element) => element !== ascent);
    localStorage.setItem("ascents", JSON.stringify(ascentArray));
    dispatch({ type: "alter_ascents", newAscentArray: ascentArray });
  };

  return (
    <>
      <AscentList
        addAscent={() => dispatch({ type: "open_modal" })}
        ascentArray={state.ascentArray}
        removeAscent={(id) => removeAscent(id)}
      />
      <Modal
        data={state.newAscent}
        modalIsOpen={state.isModalOpened}
        onChange={(name, value) =>
          dispatch({ type: "change_ascent", object: { [name]: value } })
        }
        closeModal={() => dispatch({ type: "close_modal" })}
        submitForm={submitForm}
        isButtonDisabled={isButtonDisabled}
      />
    </>
  );
}

export default App;
