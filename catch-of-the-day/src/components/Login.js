import React from 'react'
import PropTypes from 'prop-types';

class Login extends React.Component {
    
    render(){
        return (
            <nav className="login">
                <h2>Inventory Login</h2>
                <p>Sign in to manage your store's inventory.</p>
                <button className="github" 
                    onClick={ ()=> this.props.authenticate('Github') }
                >
                Log In With Github
                </button>
                <button className="facebook" 
                    onClick={ ()=>this.props.authenticate('Facebook') }
                >
                    Log In With Fackbook
                </button>
                <button className="twitter" 
                    onClick={ ()=>this.props.authenticate('Twitter') }
                >
                    Log In With Twitter
                </button>

            </nav>
        );
    }
}

Login.protoTypes = {
    authenticate:PropTypes.func.isRequired
}


export default Login