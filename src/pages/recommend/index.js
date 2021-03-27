import React, {Component} from 'react';
import { Redirect } from 'react-router';
import store from "../../store";
import Audio from "../../components/audio";

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }

    render() {
        if(this.state.isLogin) {
            return (
                <div>
                   Recommend页 后面会更新的
                </div>
            )
        }else{
            return (
                <Redirect to="/login" />
            )
        }
    }
}

export default Recommend