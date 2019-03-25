import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent(){
        switch (this.props.auth){
            case null:
            return; 
            case false:
            return <li><a href="/auth/google">Login with Google</a></li>
            default:  
            return <li> <a href="/api/logout">Logout from Google</a></li>
        }
    }



    render() {
        console.log(this.props);
        return (

            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">

                        {this.renderContent()}
                    
                        {/* <li><a href="/"> Landing </a></li>
                        <li><a href="/surveys"> Dashboard </a></li>
                        <li><a href="/surveys/new"> New survey </a></li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {auth: auth};
}

export default connect(mapStateToProps)(Header);