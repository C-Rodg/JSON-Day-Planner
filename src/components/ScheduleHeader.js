import React from 'react';
import { Link } from 'react-router';

const ScheduleHeader = ({ day, date, eventCount }) => {
    return (
        <div className="schedule-header bg-dark text-center">
            <div className="header__day">{day}</div>
            <div className="header__date">{date}</div>
            <div className="header__events">{eventCount + " events"}</div>
        </div>
    );
};

export default ScheduleHeader;