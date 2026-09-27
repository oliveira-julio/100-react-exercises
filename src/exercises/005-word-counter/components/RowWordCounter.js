const RowWordCounter = ({word, number}) => {
  return (
    <>
        <tr key={word}>
            <td>{number}</td>
            <td>{word}</td>
        </tr>
    </>
  )
}

export default RowWordCounter