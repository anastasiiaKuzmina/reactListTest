import React, { Component } from 'react';
import '../../menu.css';
import MenuForm from '../Form/form';
import Menu from '../Menu/menu';
import MenuItem from '../MenuItem/menuItem';
import {performGetRequestConst} from '../../data';
import axios from 'axios';

class MenuController extends Component {

    state = {
        data: {
            items: []
        }
    };

    addItem = (itemTitle, itemUrl) => {
        let data = this.state.data;
        data.items.push({id: data.id++,name: itemTitle, link: itemUrl});
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
                elem.name = inputValue1;
                elem.href = inputValue2;
            }
            return elem;
        });
        this.setState({data});
    };

    componentDidMount() {
        performGetRequestConst(function(data) {
            console.log(data);
            this.setState({data: {items: data}});
        }.bind(this));

        // axios.get('http://eprupetw6068.petersburg.epam.com/api/products/getset')
        //     .then(function (response) {
        //         console.log(response);
        //         const result = JSON.parse(response.data);
        //         this.setState({data: {items:result}});
        //     }.bind(this))
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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