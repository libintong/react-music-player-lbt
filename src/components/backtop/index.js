import React, { Component } from "react";
import '../../statics/style/backtop.css';

class BackTop extends Component {

    onBackToTopClick = () => {
        // eslint-disable-next-line no-restricted-globals
        scrollTo(0,0)
    }

    render(){
        return(
            <div className="backtop">
                <i
                    className="iconfont icon-zhiding"
                    onClick={this.onBackToTopClick}
                ></i>
            </div>
        )
    }
}

export default BackTop