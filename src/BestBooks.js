// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import './BestBooks.css';
// import { withAuth0 } from '@auth0/auth0-react';
// import BookItem from './BookItem';
// import axios from 'axios';

// class MyFavoriteBooks extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       favBookArray : []
//     }
//   }

//   componentDidMount = () =>{
//     console.log('Hello');
//     const { user } = this.props.auth0;
//     const email = user.email;
//     axios
//     .get(`http://localhost:3010/getBooks?email=${email}`)
//     .then(result => {
//       console.log(result.data);
//       this.setState({
//         favBookArray: result.data
//       })

//     })
//     .catch(err =>{
//       console.log('Error');
//     })
//   }

//   render() {
//     return(
//       <>
//       <Jumbotron>
//         <h1>My Favorite Books</h1>
//         <p>
//           This is a collection of my favorite books
//         </p>
//       </Jumbotron>
//           <BookItem 
//            Book={this.state.favBookArray}/>
//       </>
//     )
//   }
// }
// export default withAuth0(MyFavoriteBooks);

// ============================================================================

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import BookItem from './BookItem';
import BookFormModal from './BookFormModal';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favBookArray: [],
      showModel:false
    }
  }

  componentDidMount = () => {
    console.log('Hello');
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .get(`https://can-of-bookss.herokuapp.com/getBooks?email=${email}`)
      .then(result => {
        console.log(result.data);
        this.setState({
          favBookArray: result.data
        })

      })
      .catch(err => {
        console.log('Error');
      })
  }

  addBook = (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj = {
      bookName: e.target.bookName.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: email
    }

    axios
      .post(`https://can-of-bookss.herokuapp.com/addBooks`, obj)
      .then(result => {
        this.setState({
          favBookArray: result.data
        })
      })
      .catch(err => {
        console.log('Error Add!?');
      })

  }

  deleteBook = (id) => {
    console.log('heloooooooooo');
    console.log(id);
    const { user } = this.props.auth0;
    const email = user.email;
    axios
      .delete(`https://can-of-bookss.herokuapp.com/deleteBooks/${id}?email=${email}`)
      .then(result => {
        this.setState({
          favBookArray: result.data
        })
      })
      .catch(err => {
        console.log('Error Deleting !?');
      })
  }


  handleClose=()=>{
    this.setState({
      showModel:true
    })
  }

  closeModel = () => {
    this.setState({
      showModel: false
    })
  }

  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          {/* <Form onSubmit={this.addBook}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title of Book</Form.Label>
              <Form.Control type="text" name='bookName' placeholder='Title of Book' />
              <Form.Label>description</Form.Label>
              <Form.Control type="text" name='description' placeholder='Add description' />
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" name='status' placeholder='Add Status' />
            </Form.Group>
            <Button variant="warning" type='submit'>Add Book</Button>
          </Form> */}
        </Jumbotron><br></br>

        <Button variant="warning" onClick={this.handleClose}>Add Book</Button>

        <Row Row xs={1} md={3} className="g-4">
        {
          this.state.favBookArray.map(item => {
            return (
              <BookItem
                item={item}
                deleteBook={this.deleteBook}
              />
            )
          })
        }
        </Row>
        <BookFormModal show={this.state.showModel}
       handleClose={this.handleClose}
       addBook={this.addBook}
       closeModel={this.closeModel}
       />
        {/* <BookItem
          Book={this.state.favBookArray} 
          deleteBook = {this.deleteBook}
          /> */}
      </>
    )
  }
}
export default withAuth0(MyFavoriteBooks);
