import React, { Component } from 'react';
import '../../statics/style/banner.css'

class Banner extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        index: 0
    }

    autoChangeImage = () => {
        if (this.state.index === this.props.bannerList.length - 1) {
            this.setState(()=>{
                return {
                    index : 0
                }
            })
        }
        else{
            this.setState(()=>{
                const newIndex = this.state.index
                return {
                    index: newIndex+1
                }
            })
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.autoChangeImage()
        }, 2000)
    }

    render(){
        return(
            <div className="banner-container">
                <div className="banner-wrap">
                    {this.props.bannerList.map((item, bannerIndex)=>{
                        return (
                            <div
                                key={bannerIndex}
                                className="banner-image"
                            >
                                <img
                                    src={item}
                                    style={{'display' : bannerIndex === this.state.index ? 'block' : 'none'}}
                                />
                            </div>
                        )
                    })
                    }
                </div>
                <ol>
                    {this.props.bannerList.map((item, liIndex)=>{
                        return (
                            <li
                                key={item}
                                style={{'listStyleType' : liIndex === this.state.index ? 'initial' : 'circle'}}
                            ></li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

export default Banner;