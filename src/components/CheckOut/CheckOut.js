import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const CheckOut = () => {

    
////////////
    const {bookId}=useParams();
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch(`https://stark-journey-80362.herokuapp.com/books`)
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])

   const findBook= books.find(book=>book?._id==bookId)
//    console.log(findBook?.price)

   /////////


////////////
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const handleBookDetails=(data)=>{
       const orderDetails={...loggedInUser,orderTime: new Date(),BookName:findBook?.name,BookAuthor:findBook?.author,BookPrice:findBook.price}
       fetch('  https://stark-journey-80362.herokuapp.com/detailsOrder',{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(orderDetails)
      })
      .then(res=>res.json())
      .then(data=>{
        // if(data){
        //   processOrder()
        //   // Alert(' placed success ')
        // }
       
      })
   }
    return (
        <div className="container mt-5">
            <h1>This is order page</h1>
            <div className="jumbotron">


<Table striped bordered hover size="sm">
    <thead>
        <tr>

            <th>Description</th>
            <th>Quantity</th>
            <th>price</th>
        </tr>
    </thead>
    <tbody>
        <tr>

            <td>{findBook?.name}</td>
            <td>1</td>
            <td>${findBook?.price}</td>
            
        </tr>
        <tr>
            <td >Total</td>
            <td></td>
            <td >${findBook?.price}</td>
        </tr>

    </tbody>
</Table>

</div>
<Link to='/order'><div className="d-flex"><button className="btn btn-primary  ml-auto" onClick={handleBookDetails}>Checkout</button></div></Link>
            
           
        </div>
    );
};

export default CheckOut;