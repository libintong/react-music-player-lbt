const defaultState = {
    imageIndex: 0,
    username: '',
    password: '',
    code: '',
    newSongUrl: '',
    isLogin: false,
    isPlaying: false,
    showBar: false,
    showBackToTop: false,
    userInfo: {},
    songDetail: [],
    currentSongItem: [],
    newSongList1: [],
    bannerList: [],
    musicUrlList: [],
}

export default (state=defaultState, action)=>{
    if(action.type === 'get_username_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.username = action.value
        return newState
    }
    if(action.type === 'get_password_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.password = action.value
        return newState
    }
    if(action.type === 'get_userInfo'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.userInfo = action.value
        return newState
    }
    if(action.type === 'get_banner_list'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.bannerList = action.value
        return newState
    }
    if(action.type === 'get_newsong_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.newSongList = action.value
        return newState
    }
    if(action.type === 'change_isLogin_login'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.isLogin = action.value
        return newState
    }
    if(action.type === 'change_isLogin_logout'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.isLogin = action.value
        return newState
    }
    if(action.type === 'get_newsongInfo_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.newSongList1 = action.value
        return newState
    }
    if(action.type === 'get_song_url'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.newSongUrl = action.value
        console.log('lbt reducer url1', newState.newSongUrl)
        return newState
    }
    if(action.type === 'set_current_song_item'){
        const newState = JSON.parse(JSON.stringify(state))
        const { ...songItem } = action.value[0]
        newState.currentSongItem = songItem
        return newState
    }
    if(action.type === 'set_music_url_list'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.musicUrlList = action.value
        return newState
    }
    if(action.type === 'change_isPlaying_true'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.isPlaying = !newState.isPlaying
        console.log('change_isPlaying_true', newState.isPlaying)
        return newState
    }
    if(action.type === 'change_isPlaying_false'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.isPlaying = !newState.isPlaying
        console.log('change_isPlaying_false', newState.isPlaying)
        return newState
    }
    if(action.type === 'change_allTime'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.allTime = action.value
        console.log('change_allTime', newState.allTime)
        return newState
    }
    if(action.type === 'change_current'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.current = action.value
        console.log('change_current', newState.current)
        return newState
    }
    if(action.type === 'change_backToTop_true'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.showBackToTop = !newState.showBackToTop
        return newState
    }
    if(action.type === 'change_backToTop_false'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.showBackToTop = !newState.showBackToTop
        return newState
    }
    return state;
}