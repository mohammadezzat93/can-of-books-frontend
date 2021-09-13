import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class BookItem extends React.Component {
    render() {
        return (
            <>
                <Carousel>
                    {
                        this.props.Book.map(item => 
                            <Carousel.Item interval={1500}>
                                <img
                                    className="d-block w-100"
                                    src={item.img}
                                    alt="First slide"
                                    height='600'
                                />
                                <Carousel.Caption>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <h3>{item.status}</h3>
                                    <h4>{item.email}</h4>
                                </Carousel.Caption>

                            </Carousel.Item>
                        )}

                </Carousel>
            </>
        )
    }
}

export default BookItem;
