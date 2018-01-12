import axios from 'axios';

const URL = 'https://components-21-30.firebaseio.com/menu/-Kz5NeJk9exl8TnG0ZZf.json';

const performGetRequestConst = function performGetRequest(callback) {
    axios.get('http://eprupetw6068.petersburg.epam.com/api/products/getset')
        .then(function (response) {
            const result = JSON.parse(response.data);
            console.log(result);
            callback(result);
        })
        .catch(function (error) {
            console.log(error);
        });
};









// axios.get('http://eprupetw6068.petersburg.epam.com/api/products/getset')
//     .then(function (response) {
//         console.log(response);
//         const result = JSON.parse(response.data);
//         this.setState({data: {items:result}});
//     }.bind(this))
//     .catch(function (error) {
//         console.log(error);
//     });

// function performGetRequest() {
//
//     return axios.get('https://components-21-30.firebaseio.com/menu/-Kz5NeJk9exl8TnG0ZZf.json')
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

// const dataSet1 = {
//     items: [
//         {
//             id: 1,
//             title: 'mail.ru',
//             linkUrl: 'https://mail.ru/',
//         },
//         {
//             id: 2,
//             title: 'yandex.ru',
//             linkUrl: 'https://yandex.ru/'
//         },
//         {
//             id: 3,
//             title: 'google.com',
//             linkUrl: 'https://www.google.ru/'
//         },
//     ],
//
//     id: 4
// };

export { performGetRequestConst }