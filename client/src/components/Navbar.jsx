import React from 'react';
import moment from 'moment';
import _ from 'lodash';

const Navbar = ({
    queryPress,
    queryTwitter,
    queryPropublica,
}) => (
    <div className="container" >
        <ul className="nav nav-tabs border-bottom-0">
            <li className="nav-item interactive">
                <a
                    className="nav-link text-primary border-primary border-bottom-0 mr-1"
                    onClick={() => queryPress('abigail+spanberger')}
                >
                    <i className="fas fa-newspaper"></i>
                </a>
            </li>
            <li className="nav-item interactive">
                <a
                    className="nav-link text-danger border-danger border-bottom-0 mr-1"
                    onClick={() => queryPress('dave+brat')}
                >
                    <i className="fas fa-newspaper"></i>
                </a>
            </li>
            <li className="nav-item interactive">
                <a
                    className="nav-link text-danger border-danger border-bottom-0 mr-1"
                    onClick={queryTwitter}
                >
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            {/* <li className="nav-item interactive">
                <a
                    className="nav-link text-danger border-danger border-bottom-0 mr-1"
                    onClick={ queryTwitter }
                >
                    <i className="fab fa-facebook"></i>
                </a>
            </li> */}
            <li className="nav-item interactive">
                <a
                    className="nav-link text-danger border-danger border-bottom-0 mr-1"
                    // href="#"
                    onClick={queryPropublica}
                >
                    <i className="fas fa-gavel"></i>
                </a>
            </li>
        </ul>
    </div>
);

export default Navbar;