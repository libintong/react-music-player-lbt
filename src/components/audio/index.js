import axios from "axios";
import React, {Component} from "react";
import '../../statics/style/audio.css'

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // url: this.props.audioUrl,
            currentTime: "00:00",
            totalTime: "00:00",
            isPlay: false
        };
        this.outside = React.createRef();
        this.inside = React.createRef();
        this.audio = React.createRef();
    }

    componentDidMount() {
        this.canplay();
        this.timeUpdate();
        this.onended()
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('nextProps', nextProps)
    //
    // }

    formatTime = (value) => {
        const minute = (Math.floor(value / 60) + '').padStart(2, '0')
        const second = (Math.floor(value % 60) + '').padStart(2, '0')
        return `${minute}:${second}`
    }

    canplay = () => {
        // 鉴别付费歌曲还没做 后面会做的
        // axios.get(this.audio.current.src).then().catch(alert('该歌曲需付费'))
        this.audio.current.oncanplay = () => {
            const totalTime = this.formatTime(this.audio.current.duration)
            this.setState({
                totalTime
            })
        }
    }

    timeUpdate = () => {
        this.audio.current.ontimeupdate = () => {
            if(!this.audio.current.currentTime){return}
            const currentTime = this.formatTime(this.audio.current.currentTime)
            this.setState({
                currentTime
            })
            this.inside.current.style.width =
                (this.audio.current.currentTime / this.audio.current.duration) * 100 + "%";
        }
    }

    onended = () => {
        this.audio.current.onended = () => {
            this.setState({
                isPlay: false
            })
        }
    }

    onAudioPlay = () => {
        this.setState({
            isPlay: true
        })
        this.audio.current.play();
    }

    onAudioStop = () => {
        this.setState({
            isPlay: false
        })
        this.audio.current.pause();
    }

    onProgressChange = (e) => {
        const outsideWidth = this.outside.current.offsetWidth
        const insideWidth = e.targetTouches[0].clientX - this.outside.current.getBoundingClientRect().left
        console.log('lbt onProgressChange',e, insideWidth, outsideWidth)
        if (insideWidth > outsideWidth || insideWidth < 0){return}
        this.inside.current.style.width = insideWidth + "px"
        this.audio.current.currentTime = (insideWidth / outsideWidth) * this.audio.current.duration
    }

    developmentPendingClick = () => {
        alert('待开发～～')
    }

    render() {
        return (
            <div className="audio">
                <div className="audio-img">
                    <img
                        className={this.state.isPlay ? 'img-play' : 'img-paused'}
                        src={this.props.imageUrl}
                    />
                </div>
                <div className="audio-info">
                    <span>{this.props.artistName}</span>
                    <span>{this.props.name}</span>
                </div>
                <div className="audio-progress">
                    <span>{this.state.currentTime}</span>
                    <div
                        className="audio-outside"
                        ref={this.outside}
                        // onMouseMove={(e)=> this.onProgressChange(e)}
                        // onMouseDown={(e)=> this.onProgressChange(e)}
                        onTouchMove={(e) => this.onProgressChange(e)}
                        onTouchStart={(e) => this.onProgressChange(e)}
                    >
                        <div
                            className="audio-inside"
                            ref={this.inside}
                        >
                            <div className="audio-inside-btn"></div>
                        </div>
                    </div>
                    <span>{this.state.totalTime}</span>
                    <audio
                        ref={this.audio}
                        // src={this.state.url}
                        src={`https://music.163.com/song/media/outer/url?id=${this.props.id}.mp3`}
                    ></audio>
                    <div className="audio-btn">
                        <i
                            className="iconfont icon-prev"
                            onClick={this.developmentPendingClick}
                        ></i>
                        <div className="audio-playOrPauseBtn">
                            {!this.state.isPlay
                                ? <i
                                    className="iconfont icon-bofang"
                                    onClick={this.onAudioPlay}
                                ></i>
                                : <i
                                    className="iconfont icon-zanting"
                                    onClick={this.onAudioStop}
                                ></i>
                            }
                        </div>
                        <i
                            className="iconfont icon-next"
                            onClick={this.developmentPendingClick}
                        ></i>
                    </div>
                </div>
                <div className="audio-lyrics">
                    <i
                        className="iconfont icon-lyrics"
                        onClick={this.developmentPendingClick}
                    ></i>
                </div>
            </div>
        )
    }
}

export default Audio;
