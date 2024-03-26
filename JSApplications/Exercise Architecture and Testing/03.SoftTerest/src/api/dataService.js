import { requesterMethod } from "./requester.js"

const endPoints = {
    getAllIdeas: "data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    singleIdea: "data/ideas/"
}

async function getAllIdeas() {
    return await requesterMethod.get(endPoints.getAllIdeas);
}

async function getIdea(id) {
    return await requesterMethod.get(endPoints.singleIdea + id);
}

async function createIdea(data) {
    return await requesterMethod.post(endPoints.singleIdea, data);
}

async function deleteIdea(id) {
    return await requesterMethod.del(endPoints.singleIdea, id);
}

export const dataService = {
    getAllIdeas,
    getIdea,
    createIdea,
    deleteIdea
}