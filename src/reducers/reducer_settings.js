// Import Action types
import { 
    SET_DATE_SUCCESS, SET_EVENTS_SUCCESS, SET_SCHEDULE_ERROR
} from '../actions/actions_schedule';

// Set initial settings state
const INITIAL_STATE = {
    date: "",
    day: "",
    events: [],
    militaryTime: true
};

export const settings = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_DATE_SUCCESS:
            return Object.assign({}, state, { date: action.date, day: action.day });
        case SET_EVENTS_SUCCESS:
            return Object.assign({}, state, { events: action.payload });

        case SET_SCHEDULE_ERROR:
            return state;

        default: 
            return state;
    }
}