import React, { Component } from 'react';

class MenuForm extends Component {

    state = {
        valueTitle: '',
        valueLink: ''
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
    
    render() {
        return (
            <form className="form-inline" name="list-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="value"
                        className="form-control"
                        value={this.state.valueTitle}
                        onChange={event => this.setState({ valueTitle: event.target.value })}/>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="link"
                        className="form-control"
                        value={this.state.valueLink}
                        onChange={event => this.setState({ valueLink: event.target.value })}
                    />
                </div>
                <button type="button" className="btn btn-primary btn-click" onClick={this.handleBtnClick}>Добавить</button>
            </form>
        );
    }
}

export default MenuForm;