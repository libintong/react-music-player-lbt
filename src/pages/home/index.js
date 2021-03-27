import React, {Component, Fragment} from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import NewSongItem from '../../components/newsongitem';
import Footer from '../../components/footer';
import PlayBar from "../../components/playbar";
import BackTop from "../../components/backtop";
import '../../statics/style/home.css';
import store from '../../store';
import {getBanner, getSongUrlById, getTopSong, getSongLryic, getMp3UrlByIds } from '../../services/api'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
    }

    componentDidMount() {
        store.subscribe(this.onHandleSetState)
        getBanner()
        getTopSong()
        window.addEventListener('scroll', this.handleScroll)
    }
// lbt
    handleScroll() {
        let scrollTop = document.body.scrollTop
        if(scrollTop > 100){
            const action = {
                type: 'change_backToTop_true'
            }
            store.dispatch(action)
        }else{
            const action = {
                type: 'change_backToTop_false'
            }
            store.dispatch(action)
        }
      }

    onHandleSetState = () => {
        this.setState(store.getState())
    }

    onNewsongPlayClick = (value) => {
        const ids = value.toString()
        getSongUrlById(ids)
        // getSongDetail(ids)
        getSongLryic(ids)
        this.state.newSongList1.map((item)=>{
            if(value === item.id){
                const songItem = {
                    id: item.id,
                    artistName: item.artistName,
                    name: item.name,
                    imageUrl: item.imageUrl,
                    duration: item.duration
                }
                const currentSongItem = []
                currentSongItem.push({...songItem})
                const action = {
                    type: 'set_current_song_item',
                    value: currentSongItem
                }
                store.dispatch(action)
            }
        })
        this.state.musicUrlList.map((item)=>{
            console.log('musicUrlList', item)
        })
    }

    render() {
        return (
            <Fragment>
                <div
                    className="home-div"
                    ref={this.home}
                    >
                    <div>
                        <Header/>
                    </div>
                    <div>
                        <Banner
                            bannerList={this.state.bannerList}
                        />
                    </div>
                    <div className="home-newsong">
                        {this.state.newSongList1.map((value, index) => {
                            return (
                                <NewSongItem
                                    key={value.id}
                                    value={value}
                                    index={index}
                                    onNewsongPlayClick={this.onNewsongPlayClick}
                                    mp3Url={this.state.newSongUrl}
                                />
                            )
                        })}
                    </div>
                    <div className="home-footer">
                        <Footer/>
                    </div>
                    <div className="home-backtop">
                        {this.state.showBackToTop ? <BackTop/> : ''}
                    </div>
                    {
                        this.state.newSongUrl
                            ? <div className="home-playbar">
                                <PlayBar
                                    mp3Url={this.state.newSongUrl}
                                    currentSongItem={this.state.currentSongItem}
                                />
                              </div>
                            : null
                    }
                </div>
            </Fragment>
        )
    }
}

export default Home;