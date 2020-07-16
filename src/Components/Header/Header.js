import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';

import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';


const Header = ({ isHomePage, isList, onLayoutChange, updateUsers }) => {
    return (
        <Navbar
            className={style.header}
            alignLinks="right"
            brand={<a className={`${style.brand} brand-logo`}>Bit People</a>}
            centerChildren
            id="mobile-nav"
            menuIcon={<><div className={style.menu}></div><div className={style.menu}></div><div className={style.menu}></div></>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            {isHomePage
                ? <div className={style.flex}><Link className={style.link} to='/about'><NavItem>
                    <span className={style.about}>About</span>
                </NavItem></Link>
                    <NavItem onClick={updateUsers}>
                      <i className={`${style.icons} fa fa-refresh`}></i>
                    </NavItem>
                    <NavItem>
                        {isList
                            ? <i className={`${style.icons} fa fa-th-large`} onClick={onLayoutChange}></i>
                            : <i className={`${style.icons} fa fa-list`} onClick={onLayoutChange}></i>
                        }
                    </NavItem></div>
                : <Link className={style.link} to='/'><NavItem>
                    <span className={style.about}>Homepage</span>
                </NavItem></Link>
            }
        </Navbar>
    )
}

Header.propTypes = {
    isList: PropTypes.bool,
    onLayoutChange: PropTypes.func.isRequired
};
Header.defaultProps = {
    isList: true
};

export { Header };