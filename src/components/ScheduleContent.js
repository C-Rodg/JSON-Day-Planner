import React from 'react';
import SettingsBox from './SettingsBox';
import ScheduleList from './ScheduleList';

const ScheduleContent = (props) => {
    return (
        <div className="schedule-content">
            {
                props.events && props.events.length > 0 ? 
                <ScheduleList 
                    events={props.events} 
                    militaryTime={props.militaryTime}
                    filter={props.filter} />
                :
                ""
            }
 
            <SettingsBox 
                onFileUpload={props.onFileUpload} 
                onSetMilitary={props.onSetMilitary} 
                militaryTime={props.militaryTime} 
                settingsOpen={props.settingsOpen} /> 
        </div>
    );
};

export default ScheduleContent;