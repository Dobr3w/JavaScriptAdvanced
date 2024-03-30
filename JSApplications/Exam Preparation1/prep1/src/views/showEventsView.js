import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

const allEventsView = (events) => {
    if (events.length === 0) {
        return html`
        <h2>Current Events</h2>
        <section id="dashboard">
          <h4>No Events yet.</h4>
        </section>`;
    }
    
    return html`
      <!-- Dashboard page -->
      <h2>Current Events</h2>
      <section id="dashboard">
        ${events.map(event => singleEventTemplate(event))}
      </section>
    `;
  };


const singleEventTemplate = (event) => html`
<div class="event">
    <img src="${event.imageUrl}" alt="example1" />
    <p class="title">${event.name}</p>
    <p class="date">${event.date}</p>
    <a class="details-btn" href="/data/events/${event._id}">Details</a>
    </div>
`;

export async function showAllEventsView(ctx) {
    const data = await dataService.getAllEvents();
    ctx.render(allEventsView(data));
}