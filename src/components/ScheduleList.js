import React, { Component } from 'react';
import ScheduleItem from './ScheduleItem';

class ScheduleList extends Component {

    displayEvents() {
        return this.props.events.filter((event) => {
            return event.title.toUpperCase().indexOf(this.props.filter.toUpperCase()) > -1;
        })
        .map((event) => {
            let timeStr = this.props.militaryTime ? `${event.start} - ${event.end}` : `${this.convertTimeFromMilitary(event.start)} - ${this.convertTimeFromMilitary(event.end)}`;
            return <ScheduleItem key={event.start} time={timeStr} title={event.title} />;
        })
    }

    convertTimeFromMilitary(time) {
        let timeArr = time.split(":"),
            H = +timeArr[0],
            h = H % 12 || 12
            status = H < 12 ? "AM" : "PM";
        return `${h}:${timeArr[1]} ${status}`;
    }

    render() {
        return (
            <div className="schedule-list">
                <div className="list__title">
                    <h1>My Schedule</h1>
                </div>
                <ul className="list__body">
                    { this.displayEvents() }
                </ul>
            </div>
        );
    }
}

export default ScheduleList;