import React from 'react'

const Suggestions = (props) => {
  console.log(props);
  const options = props.results.map(r => (
    <div>
    <li key={r.uuid}>
      {r.suggestion}
    </li>
    </div>
  ))
  return <ul>{options}</ul>
}

export default Suggestions
