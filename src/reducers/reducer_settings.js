// Import Action types
import { 
    SET_DATE_SUCCESS, SET_EVENTS_SUCCESS, SET_SCHEDULE_ERROR,
    TOGGLE_MILITARY_TIME,
    UPDATE_FILTER
} from '../actions/actions_schedule';

// Set initial settings state
const INITIAL_STATE = {
    date: "",
    day: "",
    events: [],
    militaryTime: true,
    filter: ""
};

export const settings = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_DATE_SUCCESS:
            return Object.assign({}, state, { date: action.date, day: action.day });
        case SET_EVENTS_SUCCESS:
            return Object.assign({}, state, { events: action.payload });
        case SET_SCHEDULE_ERROR:
            return state;

        case TOGGLE_MILITARY_TIME:
            return Object.assign({}, state, { militaryTime: action.payload });

        case UPDATE_FILTER:
            return Object.assign({}, state, { filter : action.payload });

        default: 
            return state;
    }
}