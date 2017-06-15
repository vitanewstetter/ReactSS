const initialMenuState = {
    menuShowing: true,
    hover: true,
};

const menuShowing = function(state=initialMenuState, action){
    switch(action.type){
        case 'ON_HOMEPAGE':
            return Object.assign({}, state, {menuShowing: true, hover: false});
        case 'LEAVE_HOMEPAGE':
            return Object.assign({}, state, {menuShowing: false, hover: true});
        case 'MENU_HOVER':
            return Object.assign({}, state, {menuShowing: true, hover: true});
        case 'MENU_LEAVE':
            return Object.assign({}, state, {menuShowing: false, hover: true});
        case 'MENU_OFF':
            return Object.assign({}, state, {menuShowing: false, hover: false});
        default:
            return state;
    }

};

export default menuShowing;