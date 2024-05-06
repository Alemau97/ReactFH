import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

export const SearchingBar = ({searchParams}) => {

    const [searchValue, setSearchValue] = useState('');
    const [searchIcon, setSearchIcon] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchValue.length <= 1) return;
        searchParams(searchValue.toLowerCase());
    }

    const handleChange = ({target}) => {
        setSearchValue(target.value);   
        setSearchIcon(true);
        searchParams(target.value.toLowerCase());

        if(target.value === ''){
            setSearchIcon(false);
        }
       
    }
/*
    useEffect(() => {
        if(searchValue !== ' '){
            searchParams(searchValue.toLowerCase());
        }
    },[searchValue])*/
    

  return (
    <form className='row my-2' onSubmit={handleSubmit}>
        <div className=' w-50 position-relative d-flex align-items-center pe-15'>
            <input type='text' placeholder='Buscar' className='col-12' style={{paddingRight: 20}} value={searchValue} onChange={handleChange}/>
            {searchIcon ? <IoCloseSharp className='position-absolute' style={{right: 15}}/> : <CiSearch className='position-absolute' style={{right: 15}}/> }
        </div>
    </form>
  )
}
