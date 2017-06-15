import React from 'react';

import Canvas from '../components/canvas';
import ToolBox from './toolbox';

export default class Body extends React.Component {
    render(){
        if(this.props.page === 'home'){
            return <div id="app-body">
            </div>
        }else if(this.props.page === 'newcard'){
            return <div id="app-body">
                <ToolBox
                    mode={(e) => this.props.mode(e)}
                    open={this.props.open}
                />
                <Canvas name={'canvas-front'}/>
            </div>

        }else if(this.props.page === 'findcard'){
            return <div id="app-body">
                <p>find card placeholder</p>
            </div>
        }else if(this.props.page === 'about'){
            return <div id="app-body">
                <p>about placeholder</p>
            </div>
        }

    }

}
