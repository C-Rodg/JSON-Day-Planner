import React from 'react';

const ScheduleItem = ({time, title}) => {
    return (
        <li className="list__item">
            <label className="label--checkbox">
                <input type="checkbox" className="checkbox" />
                <span className="label__time">{time}</span><br />
                <span className="label__title">{title}</span>
            </label>
        </li>
    );
};

export default ScheduleItem;