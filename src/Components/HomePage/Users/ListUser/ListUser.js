import React from 'react';

import './ListUser.css';

import { hideEmail, convertDate } from '../../../../shared/utilities';
import { Col } from 'react-bootstrap';

const ListUser = ({ dob, img, name, email, last, gender }) => {
    
    return (
        <Col className={`${gender === "female" ? 'female' : ''} users__user`} lg={12} md={12} sm={12}>
            <div className="users__user_img">
                <img className="users__user_img_radius" src={img}></img>
            </div>
            <div className="users__user_info">
                <p><span> {name} {last}</span></p>
                <p><i className="fa fa-envelope"></i> email: <span> {hideEmail(email)}</span></p>
    <p><i className="fa fa-birthday-cake"></i> date of birth: <span>{convertDate(dob)}</span></p>
            </div>
        </Col>
    )
}

export { ListUser };