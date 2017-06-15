const initialAppMode = {
    mode: 'null'
};


const appMode = function(state=initialAppMode, action){
    switch(action.type){
        case 'BACKGROUND_COLOR_MODE':
            return Object.assign({}, state, {appMode: "background color"});
        case 'DRAWING_MODE':
            return Object.assign({}, state, {appMode: "drawing mode"});
        case 'TEXT_MODE':
            return Object.assign({}, state, {appMode: "text mode"});
        case 'AUDIO_MODE':
            return Object.assign({}, state, {appMode: "record audio"});
        case 'IMAGES_MODE':
            return Object.assign({}, state, {appMode: "add images"});
        case 'LINKS_MODE':
            return Object.assign({}, state, {appMode: "add links"});
        default:
            return state;
    }

};

export default appMode;