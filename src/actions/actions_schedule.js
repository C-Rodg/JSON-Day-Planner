const moment = require('moment');

export const SET_DATE_SUCCESS = 'SET_DATE_SUCCESS';
export const SET_EVENTS_SUCCESS = 'SET_EVENTS_SUCCESS';
export const SET_SCHEDULE_ERROR = 'SET_SCHEDULE_ERROR';
export const UPLOAD_SCHEDULE_ERROR = 'UPLOAD_SCHEDULE_ERROR';
export const TOGGLE_MILITARY_TIME = 'TOGGLE_MILITARY_TIME';
export const UPDATE_FILTER = 'UPDATE_FILTER';


export function getDefaultSchedule() {
    return function(dispatch) {
        const defaultSchedule = require('json-loader!../static/default-schedule.json');
        dispatch(setDateSuccess(defaultSchedule.date));
        dispatch(setEventsSuccess(defaultSchedule.events));
    }
}

function setDateSuccess(date) {
    const dateMoment = moment(date, 'ddd MMM DD YYYY')
    return {
        type: SET_DATE_SUCCESS,
        date: dateMoment.format('MMMM D, YYYY'),
        day: dateMoment.format('dddd')
    };
}

function setEventsSuccess(events) {
    return {
        type: SET_EVENTS_SUCCESS,
        payload: events
    };
}

function setScheduleError(err) {
    return {
        type: SET_SCHEDULE_ERROR,
        payload: err
    };
}

export function uploadNewSchedule(str) {
    return function(dispatch) {
        try {
            const schedule = JSON.parse(str);
            dispatch(setDateSuccess(schedule.date));
            dispatch(setEventsSuccess(schedule.events));
        } 
        catch (err) {
            return {
                type: UPLOAD_SCHEDULE_ERROR,
                payload: err
            };
        }
    }
}

export function toggleMilitaryTime(status) {
    return {
        type: TOGGLE_MILITARY_TIME,
        payload: status
    };
}

export function updateFilter(filter) {
    return {
        type: UPDATE_FILTER,
        payload: filter
    };
}