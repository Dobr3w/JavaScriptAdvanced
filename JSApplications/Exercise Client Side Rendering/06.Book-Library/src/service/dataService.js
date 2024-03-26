const URL = "http://localhost:3030/jsonstore/collections/book/";
import { dataApi } from "../requester.js";

async function loadAllBooks() {
    return await dataApi.get(URL);
}

export const dataService = {
    loadAllBooks,
}