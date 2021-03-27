import React, {Component} from "react";
import '../../statics/style/playbar.css';
import store from '../../store';
import Audio from "../audio";

class PlayBar extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }

    formatDuration = (value) => {
        const time = value / 1000
        const min = Math.floor(time / 60)
        min.toString().padStart(2, '0')
        const sec = Math.floor(time % 60)
        sec.toString().padStart(2, '0')
        return `${min}:${sec}`
    }

    componentDidMount() {
        // store.subscribe(this.onHandleSetState)
    }

    // onHandleSetState = () => {
    //     this.setState(store.getState())
    // }

    onNextClick = () => {

    }

    onPrevClick = () => {

    }

    onShowLyricsClick = () => {
        alert('后面有空会做滚动歌词哒')
    }

    render() {
            if (this.state.isPlaying) {
                return (
                    <div className="playbar">
                        <Audio
                            id={this.props.currentSongItem.id}
                            audioUrl={this.props.mp3Url}
                            imageUrl={this.props.currentSongItem.imageUrl}
                            artistName={this.props.currentSongItem.artistName}
                            name={this.props.currentSongItem.name}
                        />
                    </div>
                )
            }
        }
}

export default PlayBar;