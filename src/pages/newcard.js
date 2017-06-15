import React from 'react';

import Canvas from '../components/canvas';
import ToolBox from '../containers/toolbox';

export default class newcard extends React.Component {
    render() {
        return <div id="app-body">
            <ToolBox/>
            <Canvas name={'canvas-front'}/>
        </div>
    }
}
