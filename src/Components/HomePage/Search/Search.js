import React from 'react';

import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';

import style from './Search.module.css';



const Search = ({ searchedUsers }) => {

   const onSearch = (e) => {
        searchedUsers(e.target.value)
    }

    return (
        <Container>
            <Row>
                <Col className={style.search}>
                    <span>
                        <i className={`${style.icon} fa fa-search`}></i>
                    </span>
                    <span className={style.form}>
                        <Form >
                            <FormControl type="text" 
                                onChange={onSearch} placeholder="Search users"
                                className={style.formBorder} />
                        </Form>
                    </span>
                </Col>
            </Row>
        </Container >

    )
}

export { Search };