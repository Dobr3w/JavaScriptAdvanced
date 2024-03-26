import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

const addEventViewTemplate = () => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
    <div class="form">
    <h2>Add Event</h2>
    <form class="create-form" @submit="${onSubmit}">
        <input type="text" name="name" id="name" placeholder="Event"/>
        <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL"/>
        <input type="text" name="category" id="event-category" placeholder="Category"/>
        <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>
        <input type="text" name="date" id="date" placeholder="When?"/>
        <button type="submit">Add</button>
    </form>
    </div>
</section>`;

let context = null;
export function showAddEventView(ctx) {
    context = ctx;
    ctx.render(addEventViewTemplate());
}

async function onSubmit(e) {
    //TODO - send data to server
    e.preventDefault();
    const formData = new FormData(e.target);
    let { name, imageUrl, category, description, date } = Object.fromEntries(formData);

    if (!name || !imageUrl || !category || !description || !date) {
        return alert("Error creating event!");
    }

    await dataService.addNewEvent({ name, imageUrl, category, description, date });
    context.goTo("/");
}