import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

const aditEventViewTemplate = (event) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
    <h2>Add Event</h2>
    <form class="create-form" @submit="${onEdit}">
        <input type="text" name="name" id="name" placeholder="Event" value="${event.name}"/>
        <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" value="${event.imageUrl}"/>
        <input type="text" name="category" id="event-category" placeholder="Category" value="${event.category}"/>
        <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50">${event.description}</textarea>
        <input type="text" name="date" id="date" placeholder="When?" value="${event.date}"/>
        <button type="submit">Edit</button>
    </form>
    </div>
</section>`;

let context = null;
let id = null;

export async function showEditEventView(ctx) {
    context = ctx;
    id = context.params.id;
    const event = await dataService.getEventDetails(id)
    context.render(aditEventViewTemplate(event));
}

async function onEdit(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    let { name, imageUrl, category, description, date } = Object.fromEntries(formData);
    const eventData = { name, imageUrl, category, description, date };

    if (!name || !imageUrl || !category || !description || !date) {
        return alert("Error creating event!");
    }

    await dataService.editEvent(id,eventData);
    context.goTo("/");
}