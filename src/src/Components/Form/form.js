import React, { Component } from 'react';

class MenuForm extends Component {

    state = {
        valueTitle: '',
        valueLink: ''
    };

    handleChange = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        });
    };

    handleBtnClick = () => {
        let titleValue = this.state.valueTitle;
        let urlValue = this.state.valueLink;
        if(!titleValue && !urlValue) {
            return;
        }
        this.props.transferData(titleValue, urlValue);
        this.setState({valueTitle: '', valueLink: ''});
    };

    validateForm = () => {

    };
    
    render() {
        return (
            <form className="form-inline" name="list-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="valueTitle"
                        className="form-control"
                        value={this.state.valueTitle}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="valueLink"
                        className="form-control"
                        value={this.state.valueLink}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="button" className="btn btn-primary btn-click" onClick={this.handleBtnClick}>Добавить</button>
            </form>
        );
    }
}

export default MenuForm;