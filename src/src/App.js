import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './menu.css';
// import Menu from 'Menu/menu';

let data = {
    items: [
        {
            id: 1,
            title: 'mail.ru',
            linkUrl: 'https://mail.ru/',
        },
        {
            id: 2,
            title: 'yandex.ru',
            linkUrl: 'https://yandex.ru/'
        },
        {
            id: 3,
            title: 'google.com',
            linkUrl: 'https://www.google.ru/'
        },
    ],

    id: 4
};

const listItems = data.items.map((item) =>
    <li className="list-item">
        <a href={item.linkUrl} target="_blank" className="list-item-text">{item.title}</a>
    </li>
);

class App extends Component {

    state = {
        valueTitle: '',
        valueLink: ''
    };

    handleClick = () => {
        alert(this.state.valueTitle);
    };

  render() {
      return (
          <div className="menu-block">
              <ul className="list">{listItems}</ul>
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
                  <button type="button" className="btn btn-primary btn-click" onClick={this.handleClick}>Добавить</button>
              </form>
          </div>
      );
  }
}

export default App;
