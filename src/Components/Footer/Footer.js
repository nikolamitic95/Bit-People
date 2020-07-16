import React from 'react';
import TimeAgo from 'timeago-react';

import style from './Footer.module.css';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ time }) => {
    return (
        <Container fluid className={style.footer} >
            <Container >
                <Row className={style.rowPadding}>
                    <Col className={style.info} lg={9} md={6} sm={6} xs={7}> <h5 >&copy; 2020 Copyright Nikola Mitić</h5></Col>
                    <Col lg={3} md={6} sm={6} xs={5} className={style.time}><h5 >Last update: <TimeAgo
                        datetime={time} />
                    </h5></Col>
                </Row>
            </Container>
        </Container>
    )
}

export { Footer };