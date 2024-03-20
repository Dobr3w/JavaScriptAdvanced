import { del, get, update } from "./requester.js"

const endPoints = {
    getAllIdeas: "data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    singleIdea: "data/ideas/"
}

async function getAllIdeas() {
    return await get(endPoints.getAllIdeas)
}

async function getIdea(id) {
    return await get(endPoints.singleIdea + id);
}

async function updateIdea(id, data) {
    return await update(endPoints.singleIdea + id, data)
}

async function deleteIdea(id) {
    return await del(endPoints.singleIdea, id)
}

export const dataService = {
    getAllIdeas,
    getIdea,
    updateIdea,
    deleteIdea
}