import React, { Component } from 'react';

class ScheduleFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSearch: false
        };
    }

    toggleSearch() {
        this.props.onFilterInput("");
        this.setState({
            showSearch: !this.state.showSearch
        });
    }

    onSearchInput(ev) {
        this.props.onFilterInput(ev.target.value);
    }

    toggleSettings() {
        this.props.onSettingsToggle();
    }

    render() {
        return (
            <div className="schedule-footer flex bg-dark">
                <div className="footer__search">
                    <span className="footer__search__btn icon" onClick={this.toggleSearch.bind(this)} >
                        <i className="material-icons large-icon">search</i>
                    </span>
                    <input type="text" className={"footer__search__input " + (this.state.showSearch ? "show-search" : "")} 
                        onChange={this.onSearchInput.bind(this)} value={this.props.filter}
                    />
                </div>
                <div className="footer__settings">
                    <span className="footer__settings__btn icon" onClick={this.toggleSettings.bind(this)}>
                        <i className="material-icons large-icon">settings</i>
                    </span>
                </div>
            </div>
        );
    }   
}

export default ScheduleFooter;