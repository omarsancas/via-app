import React from 'react'

const Suggestions = (props) => {
  console.log(props);
  const options = props.results.map(r => (

           <li key={r.uuid}>
                  {r.suggestion}
            </li>



  ))
  return <ul>{options}</ul>  
}

export default Suggestions
