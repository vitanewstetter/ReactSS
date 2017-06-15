import React from 'react';


class TextMode extends React.Component {
    componentWillUpdate(){
        addText();
    }
    render(){
        return <div id="background-color" className="tool-controls">
            <input id="add-text" type="text" placeholder="enter your text"/>
        </div>
    }
}


function addText(){

}

export default TextMode;