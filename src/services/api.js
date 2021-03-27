import axios from "axios";
import store from "../store";
import {Redirect} from "react-router";

const storeValue = store.getState()

export const getLogin = (telephone, pwd) => {
    axios.post(
        'http://localhost:3000/login/cellphone',
        {
            phone: telephone,
            password: pwd
        })
        .then((value) => {
            const {account, code, ...dataValue} = value.data
            if (code == 200) {
                const action = {
                    type: 'change_isLogin_login',
                    value: true
                }
                store.dispatch(action)
                return (
                    <Redirect to="/"/>
                )
            } else {
                alert('请输入正确的手机号或密码！！！')
            }
        })
        .catch((error) => {
            console.log('login error', error);
        })
}

export const getUserInfo = () => {
    axios.post('http://localhost:3000/user/detail', {uid: storeValue.userId})
        .then((value) => {
            console.log('lbt getUserInfo', value)
        })
        .catch()
}

export const getBanner = () => {
    axios.get('http://localhost:3000/banner?type=0')
        .then((value) => {
            const {...banners} = value.data.banners
            const bannerImageUrl = []
            for (let i = 0; i < value.data.banners.length; i++) {
                bannerImageUrl.push(banners[i].imageUrl)
            }
            const action = {
                type: 'get_banner_list',
                value: bannerImageUrl
            }
            store.dispatch(action)
        })
        .catch((error) => {
            console.log('getBanner error', error)
        })
}

export const getSongUrlById = (ids) => {
    axios.post(
        'http://localhost:3000/song/url',
        {id: ids}
    ).then(value => {
        console.log('iuiuiui',value.data.data[0])
        const action = {
            type: 'get_song_url',
            value: value.data.data[0].url
        }
        store.dispatch(action)
    }).catch()
}

export const getTopSong = () => {
    const newSongItem = {
        id: '',
        artistName: '',
        name: '',
        imageUrl: '',
        duration: ''
    }
    const newSongList = []
    axios.get('http://localhost:3000/top/song?type=0')
        .then((value) => {
            const data = value.data.data
            for (let i = 0; i < data.length; i++) {
                newSongItem.id = data[i].id
                newSongItem.artistName = data[i].artists[0].name
                newSongItem.name = data[i].name
                newSongItem.imageUrl = data[i].album.picUrl
                newSongItem.duration = data[i].duration
                newSongList.push({...newSongItem})
                const action = {
                    type: 'get_newsongInfo_value',
                    value: newSongList
                }
                store.dispatch(action)
            }
            newSongList.map((item)=>{
                getMusicUrlList(item.id)
            })

        }).catch()
}

export const getMusicUrlList = (id) => {
    const musicUrlItem = {
        id: '',
        url: '',
    }
    const musicUrlList = []
    axios.post(
        'http://localhost:3000/song/url',
        {id: id}
        ).then((value)=>{
            musicUrlItem.id = value.data.data[0].id
            musicUrlItem.url = value.data.data[0].url
            musicUrlList.push({...musicUrlItem})
            const action = {
                type: 'set_music_url_list',
                value: musicUrlList
            }
            store.dispatch(action)
    })
}

export const getMp3UrlByIds = (id) => {
}

export const getSongDetail = (id) => {
    const songItem = {
        imageUrl: '',
        artistName: '',
        name: '',

    }
    axios.post(
        'http://localhost:3000/song/detail',
        {
            ids: id
        }
    ).then((value) => {
            const {...songdetail} = value.data
            songItem.imageUrl = songdetail.songs[0].al.picUrl
            songItem.name = songdetail.songs[0].name
            songItem.artistName = songdetail.songs[0].ar[0].name
            console.log('songdetail', songItem)
        }
    ).catch()
}

export const getSongLryic = (id) => {
    axios.post('http://localhost:3000/lyric',
        {
            id: id
        }).then((value) => {
        console.log('lryic', value)
    }).catch()
}