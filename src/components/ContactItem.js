import React from 'react';
import { Row, Col } from 'react-bootstrap';
const ContactItem = ({ item }) => {
    return (
        <Row>
            <Col lg={2}>
                <img
                    width={50}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTYzidNfHEfuxnshi5uJZiVhJ-Zb-tZ7nVA&usqp=CAU"
                    alt="준호감자"
                />
            </Col>
            <Col lg={10}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    );
};

export default ContactItem;
