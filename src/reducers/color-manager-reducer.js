
import {
    purple, lightPurple
} from '../components/variables.js';

const initialColors = {
    background: purple,
    icons: 'white',
    menu: purple,
    shadow: ""
};

const colorManager = function(state=initialColors, action){
    switch(action.type){
        case 'WHITE_BACK':
            return Object.assign({}, state, {background: 'white', icons: purple, menu: 'white', shadow: 'shadow'});
        case 'PURPLE_BACK':
            return Object.assign({}, state, {background: purple, icons: 'white', menu: purple, shadow: ''});
        case 'LIGHT_BACK':
            return Object.assign({}, state, {background: lightPurple, icons: purple, menu: 'white', shadow: 'shadow'});
        default:
            return state;
    }

};

export default colorManager;