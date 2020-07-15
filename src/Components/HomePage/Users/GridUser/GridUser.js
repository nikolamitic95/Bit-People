import React from 'react';

import './GridUser.css';

import { hideEmail, convertDate } from '../../../../shared/utilities';
import { Card, Col } from 'react-bootstrap';

const GridUser = ({ dob, img, name, email, gender }) => {

    return (
        <Col className="griduser" lg={4}>
            <Card style={{ width: '' }} className="a">
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body className={`${gender === "female" ? 'female' : ''}`}>
                    <Card.Title><h1 className="gridUsers__user_name">{name}</h1></Card.Title>
                    <Card.Title><i className="fa fa-envelope"></i> {hideEmail(email)}</Card.Title>
                    <Card.Title><i className="fa fa-birthday-cake"></i> <span>{convertDate(dob)}</span></Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { GridUser };