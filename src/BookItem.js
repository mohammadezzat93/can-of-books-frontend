// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';

// class BookItem extends React.Component {
//     render() {
//         return (
//             <>
//                 <Carousel>
//                     {
//                         this.props.Book.map(item => 
//                             <Carousel.Item interval={1500}>
//                                 <img
//                                     className="d-block w-100"
//                                     src={item.img}
//                                     alt="First slide"
//                                     height='600'
//                                 />
//                                 <Carousel.Caption>
//                                     <h1>{item.title}</h1>
//                                     <p>{item.description}</p>
//                                     <h3>{item.status}</h3>
//                                     <h4>{item.email}</h4>
//                                 </Carousel.Caption>

//                             </Carousel.Item>
//                         )}

//                 </Carousel>
//             </>
//         )
//     }
// }

// export default BookItem;
// ================================================================

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class BookItem extends React.Component {
    render() {
        
        return (
            <>
            
    <Col>

            <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Text>
            <h1>{this.props.item.title}</h1>
            <h3>{this.props.item.description}</h3>
            </Card.Text>
            <Button variant="warning" onClick={() => this.props.deleteBook(this.props.item._id)}>Delete</Button>
            </Card.Body>
            <Card.Header>{this.props.item.status}</Card.Header>
      </Card>
      </Col>
            </>
        )
    }
}
export default BookItem;
