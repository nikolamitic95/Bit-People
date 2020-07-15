import React from 'react';

import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';

import style from './Search.module.css';



class Search extends React.Component {

    onSearch = (e) => {
        this.props.searchedUsers(e.target.value)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className={style.search}>
                        <span>
                            <i className={`${style.icon} fa fa-search`}></i>
                        </span>
                        <span className={style.form}>
                            <Form >
                                <FormControl type="text" value={this.props.inputValue}
                                    onChange={this.onSearch} placeholder="Search users"
                                    className={style.formBorder} />
                            </Form>
                        </span>
                    </Col>

                </Row>
            </Container >

        )
    }
}

export { Search };