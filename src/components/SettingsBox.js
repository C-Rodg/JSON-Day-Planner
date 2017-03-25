import React, { Component } from 'react';

export default class SettingsBox extends Component {

    handleFileUpload(ev) {
        const file = ev.target.files && ev.target.files[0];
        if(file.type.match(/application\/json/)) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.props.onFileUpload(e.target.result);
            };
            reader.readAsText(file);
        }
    }

    render() {
        return (
            <div className="settings-box">
                <div className="planner-import">
                    <input type="file" id="input-events" onChange={this.handleFileUpload.bind(this)}/>
                    <label htmlFor="input-events" className="input-event__label">
                        Import new schedule <i className="material-icons">input</i>
                    </label>
                </div>
                <div className="time-switch">
                    12 hour / 24 hour
                </div>
            </div>
        );
    }
}