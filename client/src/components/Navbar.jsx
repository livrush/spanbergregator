import React from 'react';
import config from '../config';

const Navbar = ({
    display,
    queryPress,
    queryTwitter,
    queryPropublica,
}) => {
    const validateActiveButton = (display, displayInstance) => {
        console.log(display, displayInstance);
        if (display === displayInstance) return ' active-media';

        return '';
    };

    return (
    <div className="container" >
        <ul className="nav nav-tabs border-bottom-0">
            <li className="nav-item interactive">
                <a
                    className={"nav-link text-primary border-primary border-bottom-0 bg-white mr-1" + validateActiveButton(display, 'press-candidate')}
                    onClick={() => queryPress(config.candidateName, 'candidate')}
                >
                    <i className="fas fa-newspaper"></i>
                </a>
            </li>
            <li className="nav-item interactive">
                <a
                    className={"nav-link text-danger border-danger border-bottom-0 bg-white mr-1" + validateActiveButton(display, 'press-opponent')}
                    onClick={() => queryPress(config.opponentName, 'opponent')}
                >
                    <i className="fas fa-newspaper"></i>
                </a>
            </li>
            <li className="nav-item interactive">
                <a
                    className={"nav-link text-danger border-danger border-bottom-0 bg-white mr-1" + validateActiveButton(display, 'twitter')}
                    onClick={() => queryTwitter(config.opponentTwitter)}
                >
                    <i className="fab fa-twitter"></i>
                </a>
            </li>
            {/* <li className="nav-item interactive">
                <a
                    className={"nav-link text-danger border-danger border-bottom-0 bg-white mr-1" + validateActiveButton(display, '')}
                    onClick={ queryTwitter }
                >
                    <i className="fab fa-facebook"></i>
                </a>
            </li> */}
            <li className="nav-item interactive">
                <a
                    className={"nav-link text-danger border-danger border-bottom-0 bg-white mr-1" + validateActiveButton(display, 'propublica')}
                    // href="#"
                    onClick={queryPropublica}
                >
                    <i className="fas fa-gavel"></i>
                </a>
            </li>
        </ul>
    </div>
    );
};

export default Navbar;