import { useState } from "react";
import extractWordsFromText from "./domain/extractWordsFromText";
import countWordsFromList from "./domain/countWordsFromList";
import TableWordCounter from "./components/TableWordCounter";

import styles from "./App.module.css"

const App = () => {
  const [counter, setCounter] = useState({})

  const handlerCounter = (e) => {
    const words = extractWordsFromText(e.target.value)
    const new_counter = countWordsFromList(words)
    setCounter(new_counter)
  }
  return (
    <div className={styles.page}>
      <div>
        <h1>Word Counter</h1>
        <textarea onChange={handlerCounter}>
        </textarea>
      </div>
      <div>
        <TableWordCounter counter={counter}></TableWordCounter>
      </div>

    </div>
  )
};

export default App;
