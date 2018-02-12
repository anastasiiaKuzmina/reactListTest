import axios from 'axios';

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

const addRequestConst = function addRequest(callback, data) {
    axios.post('http://eprupetw6068.petersburg.epam.com/api/products/add', data)
        .then(function (response) {
            const result = JSON.parse(response.data);
            console.log(result);
            callback(result);
        })
        .catch(function (error) {
            console.log(error);
        });
};

const removeRequestConst = function addRequest(callback, id) {
    axios.post(`http://eprupetw6068.petersburg.epam.com/api/products/remove?id=${id}`)
        .then(function (response) {
            const result = JSON.parse(response.data);
            console.log(result);
            callback(result);
        })
        .catch(function (error) {
            console.log(error);
        });
};

const updateRequestConst = function addRequest(callback, data) {
    axios.post(`http://eprupetw6068.petersburg.epam.com/api/products/update`, data)
        .then(function (response) {
            const result = JSON.parse(response.data);
            console.log(result);
            callback(result);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export { performGetRequestConst, addRequestConst, removeRequestConst, updateRequestConst }