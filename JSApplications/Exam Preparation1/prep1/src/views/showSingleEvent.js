import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
import { userHelper } from "../utility/userHelper.js";

const singleEventView = (event, isOwner) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
    <img id="details-img" src="${event.imageUrl}" alt="example1" />
    <p id="details-title">${event.name}</p>
    <p id="details-category">
        Category: <span id="categories">${event.category}</span>
    </p>
    <p id="details-date">
        Date:<span id="date">${event.date}</span></p>
    <div id="info-wrapper">
        <div id="details-description">
        <span>${event.description}</span>
        </div>

    </div>

    <h3>Going: <span id="go">0</span> times.</h3>
    <!--Bonus - Only for logged-in users ( not authors )-->
    <div id="action-buttons">
        ${isOwner ? getButtons(event._id) : ""}
        <a href="" id="go-btn">Going</a>
    </div>
    </div>
</section>`;


function getButtons(id) {
    return html`
    <!--Edit and Delete are only for creator-->
        <a href="/edit/${id}" id="edit-btn">Edit</a>
        <a href="/delete/${id}" id="delete-btn">Delete</a>`;
}

export async function showDetailsView(ctx) {
    const eventId = ctx.params.id;
    const event = await dataService.getEventDetails(eventId);
    const isOwner = userHelper.hasOwner(event._ownerId);
    ctx.render(singleEventView(event, isOwner));
}