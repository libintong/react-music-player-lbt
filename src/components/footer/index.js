import React, { Component } from 'react';
import '../../statics/style/footer.css'

class Footer extends Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div className='footer'>
                <p>made by libintong</p>
            </div>
        )
    }
}

export default Footer;