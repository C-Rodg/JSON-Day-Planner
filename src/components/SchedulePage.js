import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDefaultSchedule, uploadNewSchedule, toggleMilitaryTime, updateFilter } from '../actions/actions_schedule';
import ScheduleHeader from './ScheduleHeader';
import ScheduleFooter from './ScheduleFooter';
import SettingsBox from './SettingsBox';
import ScheduleContent from './ScheduleContent';

class SchedulePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settingsOpen: false
        };
    }

    componentWillMount() {
        // Get default JSON schedule
        this.props.getDefaultSchedule();
    }

    handleScheduleUpload(scheduleStr) {
        // Upload new JSON schedule
        this.props.uploadNewSchedule(scheduleStr);
    }

    handleSettingsToggle() {
        this.setState({
            settingsOpen: !this.state.settingsOpen
        });
    }

    handleOnSetMilitary(status) {
        this.props.toggleMilitaryTime(status);
    }

    handleUpdateFilter(str) {
        this.props.updateFilter(str);
    }

    render() {
        return (
            <div className="schedule-page flex flex-col">
                <ScheduleHeader 
                    day={this.props.day} 
                    date={this.props.date} 
                    eventCount={this.props.events.length} 
                />
                <ScheduleContent 
                    onFileUpload={this.handleScheduleUpload.bind(this)} 
                    settingsOpen={this.state.settingsOpen} 
                    onSetMilitary={this.handleOnSetMilitary.bind(this)}
                    militaryTime={this.props.militaryTime}
                    events={this.props.events}
                    filter={this.props.filter}
                />
                <ScheduleFooter 
                    onSettingsToggle={this.handleSettingsToggle.bind(this)} 
                    onFilterInput={this.handleUpdateFilter.bind(this)} 
                    filter={this.state.filter} />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        day: state.settings.day,
        date: state.settings.date,
        events : state.settings.events,
        militaryTime: state.settings.militaryTime,
        filter: state.settings.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDefaultSchedule: () => dispatch(getDefaultSchedule()),
        uploadNewSchedule: (str) => dispatch(uploadNewSchedule(str)),
        toggleMilitaryTime: (status) => dispatch(toggleMilitaryTime(status)),
        updateFilter: (str) => dispatch(updateFilter(str))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);