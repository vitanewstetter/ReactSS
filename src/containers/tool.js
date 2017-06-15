
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { Route, Link, Switch } from 'react-router-dom';

import BackgroundColor from '../components/toolControls/background-color';
import DrawingMode from '../components/toolControls/drawing-mode';
import TextMode from '../components/toolControls/text-mode';


class Tool extends React.Component {
    constructor(){
        super();
        this.state = {
            open: false
        };
    }
    render(){
        const path = this.props.name.replace(/\s/g, '').toLowerCase();
        if(location.pathname.includes(path)){
            return <Link to={"/newcard/" + path} >
                <div className="toolbox-item shadow" onClick={() => toolClick(this)}>
                    <p className="toolbox-title">{this.props.name}</p>
                    <Switch>
                        <Route path='/newcard/backgroundcolor' component={BackgroundColor}/>
                        <Route path='/newcard/drawingmode' component={DrawingMode}/>
                        <Route path='/newcard/textmode' component={TextMode}/>
                    </Switch>
                </div>
            </Link>
        }else{
            const path = this.props.name.replace(/\s/g, '').toLowerCase();
            return <Link to={"/newcard/" + path}>
                    <div className="toolbox-item shadow" onClick={() => toolClick(this)}>
                    <p className="toolbox-title">{this.props.name}</p>
                </div>
            </Link>
        }

    }
}


function toolClick(e){
    switch (e.props.name){
        case "background color":
            store.dispatch({
                type: 'BACKGROUND_COLOR_MODE'
            });
            break;
        case "drawing mode":
            store.dispatch({
                type: 'DRAWING_MODE'
            });
            break;
        case "text mode":
            store.dispatch({
                type: 'TEXT_MODE'
            });
            break;
        case "record audio":
            store.dispatch({
                type: 'AUDIO_MODE'
            });
            break;
        case "add images":
            store.dispatch({
                type: 'IMAGES_MODE'
            });
            break;
        case "add links":
            store.dispatch({
                type: 'LINKS_MODE'
            });
            break;
        default:
    }

}

const mapStateToProps = function(store) {
    return {
        open: store.appMode.appMode
    };
};

export default connect(mapStateToProps)(Tool);