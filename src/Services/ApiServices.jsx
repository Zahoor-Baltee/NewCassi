
import AppSetting from "./AppSetting";
const baseURI = AppSetting.serverUrl

const ExecuteGet = async (url) => {
    return await fetch(baseURI + url, {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => {
            return result;
        })
        .catch(error => {
            return error;
        });
};

const ExecutePost = async (url, data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return await fetch(baseURI + url, {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(result => {
            return result;
        })
        .catch(error => {
            return error;
        });
};

export {
    ExecutePost,
    ExecuteGet
}