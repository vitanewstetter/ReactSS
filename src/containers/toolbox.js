import React from 'react';

import Tool from './tool';

export default class ToolBox extends React.Component {
    render(){
        return <div id="toolbox">
            <Tool
                name="background color"
                mode={(e) => this.props.mode(e)}
                open={this.props.open}
            />
            <Tool
                name="drawing mode"
                mode={(e) => this.props.mode(e)}
                open={this.props.open}
            />
            <Tool
                name="text mode"
                mode={(e) => this.props.mode(e)}
                open={this.props.open}
            />
            <Tool
                name="record audio"
                mode={(e) => this.props.mode(e)}
                open={this.props.open}
            />
            <Tool
                name="add images"
                mode={(e) => this.props.mode(e)}
                open={this.props.open}
            />
            <Tool
                name="add links"
                mode={(e) => this.props.mode(e)}
                open={this.props.open}
            />
        </div>
    }
}
