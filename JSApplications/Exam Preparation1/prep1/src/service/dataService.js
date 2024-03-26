import { api } from "../requester.js";

const BASE_URL = "http://localhost:3030";
const endpoints = {
    allEvents: "/data/events?sortBy=_createdOn%20desc",
    event: "/data/events",
    // eventDetails: "/data/events/:id",
    // editEvent : "/data/events/:id",
    // deleteEvent: "/data/events/:id"
}


async function getAllEvents() {
    return await api.get(BASE_URL + endpoints.event);
}

async function addNewEvent(data) {
    return await api.post(BASE_URL + endpoints.event, data);
}

async function getEventDetails(id) {
    return await api.get(BASE_URL + endpoints.event + `/${id}`);
}

async function editEvent(id, data) {
    return await api.put(BASE_URL + endpoints.event + `/${id}`, data);
}

async function deleteEvent(id) {
    return await api.del(BASE_URL + endpoints.event + `/${id}`);
}

export const dataService = {
    getAllEvents,
    addNewEvent,
    getEventDetails,
    editEvent,
    deleteEvent
}