import React, { Component } from 'react';

class MenuItem extends Component {

    state = {
        title: this.props.value.title,
        url: '',
        expanded: false
    };

    handleChange = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        });
    };

    // handleRemoveClick = (itemID) => {
    //     let itemValueID = itemID;
    //     this.props.transferDataRemove(itemValueID);
    // };

    handleEditClick = () => {
        this.setState({ expanded: !this.state.expanded});
    };

    handleSaveClick = (itemID) => {
        let inputTitle = this.state.title;
        let inputUrl = this.state.url;
        let itemValueID = itemID;
        this.props.transferDataSave(itemValueID, inputTitle, inputUrl);
        this.setState({expanded: false});
    };

    render() {
        const item = this.props.value;
        const itemExpanded = this.state.expanded;
        
        return (
            <li className="list-item">
                {itemExpanded ? (
                    <span>
                      <input
                          className="form-control"
                          name="title"
                          onChange={this.handleChange}
                          type="text"
                          value={this.state.title}

                      />
                      <input
                          className="form-control"
                          name="url"
                          onChange={this.handleChange}
                          type="text"
                          value={this.state.url}
                      />
                      <i className="icon-save" onClick={this.handleSaveClick.bind(this, item.id)}>Save</i>
                  </span>
                ) : (
                    <a href={item.linkUrl} target="_blank" className="list-item-text">{item.title}</a>
                )}
                <i className="icon-remove" onClick={this.props.transferDataRemove(item.id)}></i>
                <i className="icon-edit" onClick={this.handleEditClick}>edit</i>
            </li>
        );
    }
}

export default MenuItem;