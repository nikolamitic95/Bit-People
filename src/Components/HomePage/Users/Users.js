import React from 'react';

import style from './Users.module.css';

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
    
    return (
        <div>
            <Container>
                <Row>
                    <GenderCounter users={users} />
                </Row>
            </Container>
            <Container className={style.users}>
                <Row className={style.margin}>
                    {users.map((user, i) => {
                        if (isList) {
                            return (
                                <ListUser
                                    key={i}
                                    img={user.picture.thumbnail}
                                    name={user.name.first}
                                    email={user.email}
                                    dob={user.dob.date}
                                    last={user.name.last}
                                    gender={user.gender}
                                />
                            )
                        }

                        return (
                            <GridUser
                                key={i}
                                gender={user.gender}
                                img={user.picture.large}
                                name={user.name.first}
                                email={user.email}
                                dob={user.dob.date}
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