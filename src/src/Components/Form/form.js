import React, { Component } from 'react';

class MenuForm extends Component {

    state = {
        title: '',
        url: ''
    };

    handleChange = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        });
    };

    handleBtnClick = () => {
        let titleValue = this.state.title;
        let urlValue = this.state.url;
        if(!titleValue && !urlValue) {
            return;
        }
        this.props.transferData(titleValue, urlValue);
        this.setState({title: '', url: ''});
    };

    validateField = (inputName, value) => {

    };

    validateForm = () => {

    };
    
    render() {
        return (
            <form className="form-inline" name="list-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="url"
                        className="form-control"
                        value={this.state.url}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="button" className="btn btn-primary btn-click" onClick={this.handleBtnClick}>Добавить</button>
            </form>
        );
    }
}

export default MenuForm;