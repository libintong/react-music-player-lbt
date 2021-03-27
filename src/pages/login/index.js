import React, { Component } from 'react';
import store from '../../store'
import '../../statics/style/login.css'
import {getLogin} from "../../services/api";
import { Redirect } from "react-router";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }

    componentDidMount() {
        store.subscribe(this.onHandleSetState)
    }

    onHandleSetState = () => {
        this.setState(store.getState())
    }

    onUsernameChange = (e) => {
        const action = {
            type: 'get_username_value',
            value: e.target.value
        }
        store.dispatch(action)
    }

    onPasswordChange = (e) => {
        const action = {
            type: 'get_password_value',
            value: e.target.value
        }
        store.dispatch(action)
    }

    onLoginBtn = () => {
        const phone = this.state.username
        const pwd = this.state.password
        getLogin(phone, pwd)
    }

    render() {
        if(!this.state.isLogin){
            return(
                <div className="login-outside">
                    <div className="login-inside">
                        <div className="login-img"></div>
                        <div className="login-content">
                            <form>
                                <input
                                    type="text"
                                    placeholder="telephone"
                                    value={this.state.username}
                                    onChange={this.onUsernameChange}
                                />
                                <input
                                    type="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}
                                />
                            </form>
                            <div className="login-btn">
                                <button
                                    onClick={this.onLoginBtn}
                                >LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                    <Redirect to="/"/>
                )
        }
    }
}

export default Login