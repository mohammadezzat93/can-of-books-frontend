import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import BookItem from './BookItem';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      favBookArray : []
    }
  }

  componentDidMount = () =>{
    console.log('Hello');
    const { user } = this.props.auth0;
    const email = user.email;
    axios
    .get(`http://localhost:3010/getBooks?email=${email}`)
    .then(result => {
      console.log(result.data);
      this.setState({
        favBookArray: result.data
      })
      
    })
    .catch(err =>{
      console.log('Error');
    })
  }

  render() {
    return(
      <>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
          <BookItem 
           Book={this.state.favBookArray}/>
      </>
    )
  }
}
export default withAuth0(MyFavoriteBooks);
