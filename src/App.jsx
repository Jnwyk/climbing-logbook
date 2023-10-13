import "./App.css";
import { useState } from "react";
import AddAscentCard from "./components/AddAscentCard";
import Modal from "./components/Modal";

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <AddAscentCard onClick={() => setIsModalOpened(true)} />
      <Modal
        modalIsOpen={isModalOpened}
        onChange={(e) => console.log(e.target.value)}
        closeModal={() => setIsModalOpened(false)}
      />
    </>
  );
}

export default App;
