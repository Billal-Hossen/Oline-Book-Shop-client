import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';
import { Spinner } from 'react-bootstrap';

const Home = () => {

    const [books, setBooks]=useState([])
    useEffect(()=>{
        fetch(`https://stark-journey-80362.herokuapp.com/books`)
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])

    const [cart,setCart]=useState([])
 const handleBuyBook=(book)=>{
//    console.log('Clicked',book)
   const newCard=[...cart,book];
   setCart(newCard)
//    console.log(newCard)
 }
    return (
       
   <div className="container mt-5">
        <div className="row ">
        {
                 books.length === 0 && <Spinner className="center" animation="border" variant="primary" ></Spinner>
             }
        {
            books.map(book=><Book book={book} handleBuyBook={handleBuyBook}></Book>)
        }
        
    </div>
   </div>
      
    );
};

export default Home;