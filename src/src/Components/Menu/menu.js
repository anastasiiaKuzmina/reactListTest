import React, { Component } from 'react';
import MenuItem from '../MenuItem/menuItem';

class Menu extends Component {

    transferDataRemove = (item) => {
        this.props.transferDataRemove(item);
    };

    transferDataSave = (item, inputValue1, inputValue2) => {
        this.props.transferDataSave(item, inputValue1, inputValue2);
    };

    render() {

        const listItems = this.props.dataMenu.items.map((item, index) =>
            <MenuItem value={item} key={index} transferDataRemove={this.transferDataRemove} transferDataSave={this.transferDataSave} />
        );
        
        return (
            <div>
                <ul className="list">{listItems}</ul>
            </div>
        );
    }
}

export default Menu;