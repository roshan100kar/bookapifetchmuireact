import React, {useState} from 'react'
import {IconBase} from "react-icons"
import "./SearchBar.css"

const SearchBooks = ({setResults}) => {

    const [input, setInput] = useState("");

    const fetchData = (value)=> {
        fetch("https://api.gyanibooks.com/library/get_dummy_notes/")
        .then((response)=> response.json()).then(json => {
            // console.log(json)
            const results = json.filter((title)=> {
                return value && title && title.title && title.title.toLowerCase().includes(value)
            })

            setResults(results)
        });
        
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
   
  return (
    <div className='App'>
        <div className='input-wrapper'>
            <span>Search</span>
            <IconBase id="search-icon"/>
            <input placeholder='Type to search' value={input} onChange={(e)=> handleChange(e.target.value)} />
        </div>
    </div>    
     
  )
}

export default SearchBooks