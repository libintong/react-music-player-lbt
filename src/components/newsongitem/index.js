import React, { Component } from 'react';
import '../../statics/style/newsong.css';
import store from "../../store";

class NewSongItem extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }

    onShowBarClick = () => {
        const action = {
            type: 'change_isPlaying_true',
        }
        store.dispatch(action)
        if(!this.props.onNewsongPlayClick){return}
        this.props.onNewsongPlayClick(this.props.value.id)
    }

    render() {
        return (
            <div className="newsongItem">
                <div className="newsongItem-outside">
                    <div className="newsongItem-inside">
                        <div
                            className="newsongItem-num"
                            onClick={this.onShowBarClick}
                        >
                            {this.props.value.id ? this.props.index + 1 : ''}
                        </div>
                        <div className="newsongItem-avatar">
                            <img src={this.props.value.imageUrl}/>
                        </div>
                        <div className="newsongItem-info">
                            <span>{this.props.value.artistName}</span>
                            <p>{this.props.value.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewSongItem;