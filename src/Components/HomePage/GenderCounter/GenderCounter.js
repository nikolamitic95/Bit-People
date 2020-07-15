import React from 'react';

import { Col } from 'react-bootstrap';

import style from './GenderCounter.module.css'

const GenderCounter = ({ users }) => {

    let male = 0;
    let female = 0;
    console.log(users);

    users.forEach(user => {
        if (user.gender === "male") {
            male++
        } else {
            female++
        }
    });
    return (
        <Col className={style.gender}>
            <p>Male: {male} Female: {female}</p>
        </Col>
    )
}

export { GenderCounter };