import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

    goToAddRoom = () => {
        this.props.history.push({
            pathname: '/addroom',
        })
    }

    render() {
        return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand" href="#">
                    <Link to={'/'} style={{color: 'black'}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5moT8Tpd_WO1pXCXquMKAHhDJKUOtNl50sJkX47cbl89wYHSQ&s" width="30" height="30" className="d-inline-block align-top" alt=""></img>  
                        Smart House
                    </Link>  
                </div>
            </nav>
        </div>
        )
    }
}
export default withRouter(Header);