import React from 'react'
import "./SearchResults.css"
const SearchResultList = ({results}) => {
  return (
    <div className='results-list'>
        {
            results.map((result, id) => {
                return <div key={id}>{result.title}</div>
            })
        }

    </div>
  )
}

export default SearchResultList