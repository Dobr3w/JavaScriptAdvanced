// V Create Furniture (POST):     http://localhost:3030/data/catalog
// V All Furniture (GET):         http://localhost:3030/data/catalog
// V Furniture Details (GET):     http://localhost:3030/data/catalog/:id
// V Update Furniture (PUT):      http://localhost:3030/data/catalog/:id
// V Delete Furniture (DELETE):   http://localhost:3030/data/catalog/:id
// V My Furniture (GET):          http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22

import { api } from "../requester.js";

const BASE_URL = "http://localhost:3030/data/";
const endpoints = {
    myFurniture: (userId) => `catalog?where=_ownerId%3D%22${userId}%22`,
    furniture: "catalog"
}

async function createFurniture(data) {
    return await api.post(BASE_URL + endpoints.furniture, data);
}

async function getAllFurniture() {
    return await api.get(BASE_URL + endpoints.furniture);
}

async function furnitureDetails(id) {
    return await api.get(BASE_URL + endpoints.furniture + `/${id}`);
}

async function updateFurniture(id, data) {
    return await api.put(BASE_URL + endpoints.furniture + `/${id}`, data);
}

async function deleteFurniture(id) {
    return await api.del(BASE_URL + endpoints.furniture + `/${id}`);
}

async function myFurniture(userId) {
    return await api.get(BASE_URL + endpoints.myFurniture(userId));
}

export const dataService = {
    createFurniture,
    getAllFurniture,
    furnitureDetails,
    updateFurniture,
    deleteFurniture,
    myFurniture
}