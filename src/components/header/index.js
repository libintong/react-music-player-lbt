import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import store from '../../store';
import '../../statics/style/header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }

    onLogoutClick = () => {
        const action = {
            type: 'change_isLogin_logout',
            value: false
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div className="nav-div">
                <ul className="nav-ul">
                    <li>
                        <Link key='logo' to="/" style={{ textDecoration:'none', color: '#666'}}>
                            <div className="nav-logo"></div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/recommend" style={{ textDecoration:'none', color: '#000'}}>推荐</Link>
                    </li>
                    <li>
                        <Link to="/rank" style={{ textDecoration:'none', color: '#000'}}>排行榜</Link>
                    </li>
                    <li>
                        <Link to="/songsheet" style={{ textDecoration:'none', color: '#000'}}>歌单</Link>
                    </li>
                    <li>
                        <Link to="/radio" style={{ textDecoration:'none', color: '#000'}}>主播电台</Link>
                    </li>
                    <li>
                        <Link to="/singer" style={{ textDecoration:'none', color: '#000'}}>歌手</Link>
                    </li>
                    <li>
                        <Link to="/onsale" style={{ textDecoration:'none', color: '#000'}}>新碟上架</Link>
                    </li>
                    <li>
                        {this.state.isLogin
                            ? <Link to="/login" style={{ textDecoration:'none', color: '#000'}}>
                                <div onClick={this.onLogoutClick}>退出</div>
                              </Link>
                            : <Link to="/login" style={{ textDecoration:'none', color: '#000'}}>登录</Link>
                        }
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;