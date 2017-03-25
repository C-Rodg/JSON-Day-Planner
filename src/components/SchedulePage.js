import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDefaultSchedule, uploadNewSchedule } from '../actions/actions_schedule';
import ScheduleHeader from './ScheduleHeader';
import ScheduleFooter from './ScheduleFooter';
import SettingsBox from './SettingsBox';

class SchedulePage extends Component {

    componentWillMount() {
        // Get default JSON schedule
        this.props.getDefaultSchedule();
    }

    handleScheduleUpload(scheduleStr) {
        // Upload new JSON schedule
        this.props.uploadNewSchedule(scheduleStr);
    }

    render() {
        return (
            <div className="schedule-page">
                <ScheduleHeader 
                    day={this.props.day} 
                    date={this.props.date} 
                    eventCount={this.props.events.length} 
                />

                <SettingsBox onFileUpload={this.handleScheduleUpload.bind(this)} />
                <ScheduleFooter />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        day: state.settings.day,
        date: state.settings.date,
        events : state.settings.events
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDefaultSchedule: () => dispatch(getDefaultSchedule()),
        uploadNewSchedule: (str) => dispatch(uploadNewSchedule(str))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);