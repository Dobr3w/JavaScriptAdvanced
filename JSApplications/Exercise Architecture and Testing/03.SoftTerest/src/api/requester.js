import { getUser, removeUser } from "../utils/userUtils.js";

const baseUrl = "http://localhost:3030/";

async function requester(method, endPoint, data) {
    const url = baseUrl + endPoint;
    const userData = getUser();

    const option = {
        method,
        headers: {
        }
    }

    if (userData) {
        option.headers["X-Authorization"] = userData.accessToken;
    }

    if (data) {
        option.headers["Content-Type"] = "application/json";
        option.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, option);
        if (!response.ok) {
            if (response.status == 403) {
                removeUser();
            }
            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;
        }

        return response.json();

    } catch (error) {
        alert(error);
        throw error;
    }

}

async function get(url) {
    return await requester("GET", url);
}

async function post(url, data) {
    return await requester("POST", url, data);
}

async function update(url, data) {
    return await requester("PUT", url, data);
}

async function del(url) {
    return await requester("DELETE", url);
}

export const requesterMethod =  {
    get,
    post,
    update,
    del
}