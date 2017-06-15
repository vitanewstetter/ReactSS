import React from 'react';
import menuShowing from './menu-showing-reducer';
import appMode from './app-mode-reducer';
import color from './color-manager-reducer';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    menuShowing: menuShowing,
    appMode: appMode,
    colors: color
});


export default reducers;