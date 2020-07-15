import React from 'react';
import notFound from '../../../Images/not_found.png';

import style from './NotFound.module.css';

import { Container, Row, Col } from 'react-bootstrap';


const NotFound = () => {
    return (
        <Container className={style.notFound}>
            <Row>
                <Col>
                    <img src={notFound}></img>
                </Col>
            </Row>
        </Container>

    )
}

export { NotFound };