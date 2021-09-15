import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class UpdateFormModel extends React.Component {
    render() {

        return (
            <>

                <Modal show={this.props.show} onHide={this.props.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title className="title">update Book </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.props.ubdateBooks}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>edit Book</Form.Label>
                                <Form.Control type="text" name='bookName' defaultValue={this.props.bookName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>edit description</Form.Label>
                                <Form.Control type="text" name='description' defaultValue={this.props.description} />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>edit status</Form.Label>
                                <Form.Control type="text" name='status' defaultValue={this.props.status} />
                            </Form.Group> */}

                            <select name="status" id="status" defaultValue={this.props.status}>
                                <option>Life Changing</option>
                                <option>Favorite Five</option>
                                <option>Recomended To Me</option>
                            </select>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.closeModel2}>Close</Button>
                                <Button variant="primary" type='submit'>Ubdate</Button>
                            </Modal.Footer>

                        </Form>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}
export default UpdateFormModel;
