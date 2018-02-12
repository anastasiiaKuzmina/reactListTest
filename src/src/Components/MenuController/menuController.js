import React, { Component } from 'react';
import { idGenerator }  from 'react-id-generator';
import '../../menu.css';
import MenuForm from '../Form/form';
import Menu from '../Menu/menu';
import {performGetRequestConst, addRequestConst, removeRequestConst, updateRequestConst } from '../../data';

class MenuController extends Component {

    state = {
        data: {
            items: []
        }
    };

    randomID = () => {
        let variable = 0;
        let flag = false;

        do {
            variable = parseInt(Math.random() * 10000);
            console.log(variable);
            flag = false;

            this.state.data.items.forEach(function(item) {
                if(item.id == variable) {
                    flag = true;
                    console.log('Igor');
                }
            });
        } while(flag);

        return variable;
    };

    addItem = (itemTitle, itemUrl) => {
        let data = this.state.data;
        let obj = {id: this.randomID(),name: itemTitle, link: itemUrl};
        addRequestConst(this.getData, obj);
    };

    removeItem = (indexElement) => {
        let data = this.state.data;
        removeRequestConst(this.getData, indexElement);
    };

    saveItem = (itemID, inputValue1, inputValue2) => {
        let data = this.state.data;
        let obj = {id: itemID, name: inputValue1, link: inputValue2};
        updateRequestConst(this.getData, obj);
    };

    getData = (data) => {
        this.setState({data: {items: data}});
    };

    componentDidMount() {
        performGetRequestConst(this.getData);
    }

    render() {
        return (
            <div className="menu-block">
                <Menu dataMenu={this.state.data} transferDataRemove={this.removeItem} transferDataSave={this.saveItem} />
                <MenuForm transferData={this.addItem} />
            </div>
        );
    }
}

export default MenuController;