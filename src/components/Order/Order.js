import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Order = () => {
    const [orderInfo,setOrderInfo]=useState([])
    
    useEffect(()=>{
        fetch(`https://stark-journey-80362.herokuapp.com/sendInfo`)
        .then(res=>res.json())
        .then(data=>setOrderInfo(data))
    },[])
    // console.log(orderInfo)
    return (
        <div>
         
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>User Name</th>
      <th>Email</th>
      <th>Date and Time</th>
      <th>Book Name</th>
      <th>Author Name</th>
      <th>Price</th>
      
    </tr>
  </thead>
  <tbody>
   {
       orderInfo.map(order=>
        <tr>
        <td>{order.name}</td>
        <td>{order.email}</td>
        <td>{order.orderTime}</td>
        <td>{order.BookName}</td>
        <td>{order.BookAuthor}</td>
        <td>${order.BookPrice}</td>
      </tr>
        )
   }
    
  </tbody>
</Table>
            
        </div>
        
    );
};

export default Order;