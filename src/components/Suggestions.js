import React from 'react'

const Suggestions = (props) => {
  console.log(props);
  const options = props.results.map(r => (

           <li key={r.uuid}>
                  {r.suggestion}
            </li>



  ))
  return <span className='suggestWrapper' >
        <ul className='suggestAutocomplete'>{options}</ul>
      </span>
}

export default Suggestions
