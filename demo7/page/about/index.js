import React, {Component} from  'react';

import './index.scss'; 

class About extends Component {
    constructor (props) {
        super(props);
        this.state = {
            desc: '你好，世界'
        }
    }

    render () {
        const { desc } = this.state;
        return (
            <div>
                {desc}
            </div>
        )
    }
}