import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Book = (props) => {
    const {name,_id,price,author,imageUrl}=props.book;
    // console.log(name)
    const history=useHistory()
    const handleBuy=props.handleBuyBook
    //  handleBuy=()=>{
    //     history.push('/checkout')
   


    // }
    return (
    
            <div className="col-md-4">
        <Card style={{ width: '18rem' }} className='w-100 mb-5 card-block'>
             <Card.Img variant="top" style={{ maxheight: '16rem' }} src={imageUrl}/>
             <Card.Body>
                 <Card.Title> </Card.Title>
               <h3 class="font-weight-bold">{name} </h3>
                 <h5 className="font-weight-light">{author}</h5>
                 <div className="d-flex">
                    <div className=" w-100"><h3 className="text-success" > ${price}  </h3></div>
                    <div className="justify-content-end w-100 ">
                   <Link to={`/checkout/${_id}`}>
                <Button className="btn btn-primary " onClick={()=>handleBuy(props.book)}>Buy Now</Button>
                </Link>
                       
                        </div>
                 </div>
                

        
             </Card.Body>
             </Card>

         
     </div>
     
    );
};

export default Book;