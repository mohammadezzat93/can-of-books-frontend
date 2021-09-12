import React, {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Alert } from 'react-bootstrap';

class Profile extends Component {
    
    render(){
        const { user, isAuthenticated } = this.props.auth0;
        return(

/* TODO: render information about logged in user */

            <>
           <center> <Alert>{ isAuthenticated && <h2>Hello {user.name}</h2> }</Alert></center>
           <center><Alert>{isAuthenticated && <h3>your Email :  {user.email}</h3>}</Alert></center>
            {console.log(user)}
            <center>{isAuthenticated && <img src="https://lh3.googleusercontent.com/a-/AOh14GjmZvJJFeYIETufdCEaJ9GR0TFmuPr5z_NpdvZqFQ=s96-c" alt='img' width='200px' height='200'/>}</center>
            </>
          ) 
    }
}

  

export default withAuth0(Profile);