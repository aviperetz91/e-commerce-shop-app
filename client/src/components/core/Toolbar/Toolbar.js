import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import { FaBars } from 'react-icons/fa'
import { withRouter } from 'react-router-dom';


import styles from './style';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return { color: 'white', fontWeight: 'bold' }
    }
    else {
        return { color: '#eee' }
    }
}

const Toolbar = props => (
    <nav style={styles.navbar} className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
            <img src={logo} style={styles.logo} alt="logo"></img>
        </a>
        <button style={styles.navbarToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars size={25} color='white'/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link style={isActive(props.history, '/')} className="nav-link" to='/'>ראשי <span className="sr-only"></span></Link>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link style={isActive(props.history, '/login')} className="nav-link" to='/login'>התחברות</Link>
                </li>
                <li className="nav-item">
                    <Link style={isActive(props.history, '/register')} className="nav-link" to='/register'>הרשמה</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default withRouter(Toolbar);
