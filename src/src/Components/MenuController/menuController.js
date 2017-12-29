import React, { Component } from 'react';
import '../../menu.css';
import MenuForm from '../Form/form';
import Menu from '../Menu/menu';
import MenuItem from '../MenuItem/menuItem';
import {dataSet1} from '../../data';

class MenuController extends Component {

    state = {
        data: dataSet1
    };

    addItem = (itemTitle, itemUrl) => {
        let data = this.state.data;
        data.items.push({id: data.id++,title: itemTitle, linkUrl: itemUrl});
        this.setState({data});
    };

    removeItem = (indexElement) => {
        let data = this.state.data;
        data.items = data.items.filter(i => i.id != indexElement);
        this.setState({data});
    };

    saveItem = (itemID, inputValue1, inputValue2) => {
        let data = this.state.data;
        data.items = data.items.map((elem) => {
            if(elem.id === Number(itemID)) {
                elem.title = inputValue1;
                elem.linkUrl = inputValue2;
            }
            return elem;
        });
        this.setState({data});
    };

    render() {
        return (
            <div className="menu-block">
                <Menu dataMenu={this.state.data} dataMenu={this.state.data} transferDataRemove={this.removeItem} transferDataSave={this.saveItem} />
                <MenuForm transferData={this.addItem} />
            </div>
        );
    }
}

export default MenuController;