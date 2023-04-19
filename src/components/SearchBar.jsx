import React,{useState,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css'
import {Link} from 'react-router-dom'


const SearchBar = () => {

  const [filteredData,setFilteredData] = useState([])
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const response  = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
    }

    fetchData()
  },[])





const handleFilter = (e)=>{



  const searchWord = e.target.value
  const filterResults = products.filter((data)=>{
  return  data.title.toLowerCase().includes(searchWord.toLowerCase())
  })

if(searchWord ==""){
  setFilteredData([])
}
else{ 

  setFilteredData(filterResults)
}

console.log(filteredData)
}





  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" placeholder='search products' onChange={handleFilter}/>


        <div className='searchIcon'>
       <SearchIcon />
        </div> 

      </div>
{ filteredData.length>0 &&

<div className='dataResult'>

{filteredData.map((val)=>{

  return (
    <Link to={`/deals/${val.id}`} style={{color:'black',textDecoration:'none'}}><h2 style={{padding:'5px'}}>{val.title.substring(0,40)}</h2></Link>
  )
})}

</div>
         

     

       
}
    </div>
  )
}

export default SearchBar
