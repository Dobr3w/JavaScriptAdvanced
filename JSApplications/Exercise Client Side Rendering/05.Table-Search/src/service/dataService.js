const URL = "http://localhost:3030/jsonstore/advanced/table";
import { dataApi } from "../requester.js";

export async function loadAllData() {
    return await dataApi.get(URL);
}