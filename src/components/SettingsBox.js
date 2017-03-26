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

    handleSetMilitary(status) {
        this.props.onSetMilitary(status);
    }

    render() {
        return (
            <div className={"settings-box " + (this.props.settingsOpen ? "" : "hide")}>
                <h1>Settings:</h1>
                <div className="planner-import">
                    <input type="file" id="input-events" onChange={this.handleFileUpload.bind(this)}/>
                    <label htmlFor="input-events" className="input-event__label">
                        Import schedule <i className="material-icons">input</i>
                    </label>
                </div>
                <div className="time-switch">
                    <span className={this.props.militaryTime ? "" : "active-time"} onClick={()=> this.handleSetMilitary(false)}>12 HOUR</span>
                    <span className={this.props.militaryTime ? "active-time" : ""} onClick={()=> this.handleSetMilitary(true)}>24 HOUR</span>
                </div>
            </div>
        );
    }
}