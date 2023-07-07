import React, { useState } from 'react'
import Header from './component/Header'
import SearchBooks from './component/SearchBooks'
import './App.css'
import SearchResultList from './component/SearchResultList'
import Footer from './component/Footer'
import DataTable from './component/DataTable'
const App = () => {
  const [results, setResults] = useState([])
  return (
    <div>
      <Header/>
    <div className='App'>
      <div className='search-bar-container'>
         <SearchBooks setResults={setResults}/>
         <SearchResultList  results={results}/>
      </div>
    </div>
    <h2 className='AppCenter'>Gyani book's library </h2>
    <DataTable/>
      <Footer  sx={{background: '#ffff19', marginBottom: '50px'}}/>
    </div>
  )
}

export default App