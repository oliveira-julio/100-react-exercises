import RowWordCounter from "./RowWordCounter";

import "./TableWordCounter.module.css"

const TableWordCounter = ({ counter }) => {
  const items = Object.keys(counter).map((word) => (
    <>
      <RowWordCounter key={word} word={word} number={counter[word]}></RowWordCounter>
    </>
  ));
  return (
    <table>
      <thead>
      <tr>
        <th>Number</th>
        <th>Word</th>
      </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
  );
};

export default TableWordCounter;
