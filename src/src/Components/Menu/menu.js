import React, { Component } from 'react';
import MenuItem from '../MenuItem/menuItem';

class Menu extends Component {

    // transferDataSave = (item, inputValue1, inputValue2) => {
    //     this.props.transferDataSave(item, inputValue1, inputValue2);
    // };

    render() {

        const listItems = this.props.dataMenu.items.map((item, index) =>
            <MenuItem value={item} key={index} transferDataRemove={this.props.transferDataRemove} transferDataSave={this.props.transferDataSave} />
        );
        
        return (
            <div>
                <ul className="list">{listItems}</ul>
            </div>
        );
    }
}

export default Menu;