import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import heroesReducer from 'reducers/heroes'

const rootReducer = combineReducers({
    form: formReducer,
    heroes: heroesReducer,
});

export default rootReducer;
