import React, { useEffect, useState } from 'react'



function Search({list,setList,filterField=(item) => item,...props}) {
    useEffect(()=> {
        if (value){
            setList(filterList)
        }
        else{
            setList(list)
        }
    },[value])

    const [value,setValue]=useState("")
    
    const filterList=()=>{
        return list.filter(item=> filterField(item).toLowerCase().includes(value.toLowerCase()))
    }

    const handlechange =(event)=> {
        setValue(event.target.value)
        setList(filterList)
    }
   

    return (
        <div>
            <input type="text" placeholder='search' name='search' onChange={handlechange} value={value}  {...props}/>
        </div>
    )
}

export default Search
