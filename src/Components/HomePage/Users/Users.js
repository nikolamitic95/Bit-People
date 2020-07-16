import React from 'react';

import './Users.css';

import { ListUser } from './ListUser/ListUser';
import { GridUser } from './GridUser/GridUser';
import { Container, Row } from 'react-bootstrap';
import { Loading } from '../Loading/Loading';
import { NotFound } from '../NotFound/NotFound';
import { GenderCounter } from '../GenderCounter/GenderCounter';


const Users = ({ isList, users, isLoading }) => {

    if (isLoading) {
        return <Loading />
    }
    if (!users.length) {
        return <NotFound />
    }

    let usersGrid = '';
    if (!isList) {
        usersGrid = 'usersGrid';
    }

    return (
        <div>
            <Container>
                <Row className='rowMargin'>
                    <GenderCounter users={users} />
                </Row>
            </Container>
            <Container className={`users ${usersGrid}`}>
                <Row className='rowMargin'>
                    {users.map((user, i) => {
                        if (isList) {
                            return (
                                <ListUser
                                    key={i}
                                    img={user.thumbImg}
                                    name={user.firstName}
                                    email={user.email}
                                    dob={user.dob}
                                    last={user.lastName}
                                    gender={user.gender}
                                />
                            )
                        }

                        return (
                            <GridUser
                                key={i}
                                gender={user.gender}
                                img={user.largeImg}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email}
                                dob={user.dob}
                                gender={user.gender}
                            />
                        )
                    })}
                </Row>
            </Container>
        </div>


    )
}

export { Users };