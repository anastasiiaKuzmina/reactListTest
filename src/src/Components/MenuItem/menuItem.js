import React, { Component } from 'react';

class MenuItem extends Component {

    state = {
        inputEditTitleValue: '',
        inputEditUrlValue: '',
        expanded: false
    };

    handleRemoveClick = (itemID) => {
        let itemValueID = itemID;
        this.props.transferDataRemove(itemValueID);
    };

    handleEditClick = () => {
        this.setState({ expanded: !this.state.expanded});
    };

    handleSaveClick = (itemID) => {
        let inputTitle = this.state.inputEditTitleValue;
        let inputUrl = this.state.inputEditUrlValue;
        let itemValueID = itemID;
        this.props.transferDataSave(itemValueID, inputTitle, inputUrl);
        this.setState({inputEditTitleValue: '', inputEditUrlValue: '', expanded: ''});
    };

    render() {
        const item = this.props.value;
        const itemExpanded = this.state.expanded;
        
        return (
            <li className="list-item">
                {itemExpanded ? (
                    <span>
                      <input
                          type="text"
                          className="form-control"
                          value={this.state.inputEditTitleValue}
                          onChange={event => this.setState({ inputEditTitleValue: event.target.value })}
                      />
                      <input
                          type="text"
                          className="form-control"
                          value={this.state.inputEditUrlValue}
                          onChange={event => this.setState({ inputEditUrlValue: event.target.value })}
                      />
                      <i className="icon-save" onClick={this.handleSaveClick.bind(this, item.id)}>Save</i>
                  </span>
                ) : (
                    <a href={item.linkUrl} target="_blank" className="list-item-text">{item.title}</a>
                )}
                <i className="icon-remove" onClick={this.handleRemoveClick.bind(this, item.id)}></i>
                <i className="icon-edit" onClick={this.handleEditClick}>edit</i>
            </li>
        );
    }
}

export default MenuItem;