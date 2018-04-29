import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import routeData from './routeData';

const rootReducer = combineReducers({posts, comments, routeData, routing: routerReducer });

export default rootReducer;
