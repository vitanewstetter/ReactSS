import React from 'react';


class TextMode extends React.Component {
    componentWillUpdate(){
        addText();
    }
    componentDidMount(){
        addText();
    }
    render(){
        return <div id="background-color" className="tool-controls">
            <form id='text-input'>
                <input id="add-text" type="text" placeholder="enter your text"/>
                <button id="preview-button">preview</button>
            </form>
            <h3 id="text-preview">enter your text</h3>
        </div>
    }
}

export var inputedText;
function addText(){
    var inputbox = document.getElementById('add-text');
    var preview = document.getElementById('text-preview');
    inputedText = inputbox.value;
    preview.innerHTML = inputedText;

}

export default TextMode;