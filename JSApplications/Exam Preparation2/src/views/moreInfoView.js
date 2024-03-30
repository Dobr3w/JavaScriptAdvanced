import { get } from '../data/request.js';
import { html, render } from '../lib.js';
import { createSubmitHandler, hasOwner } from '../utils.js';

const moreInfoView = (motorcycle, isOwner) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${motorcycle.imageUrl}" alt="example1" />
    <p id="details-title">${motorcycle.model}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p class="year">Year: ${motorcycle.year}</p>
        <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
        <p class="contact">Contact Number: ${motorcycle.contact}</p>
        <p id="motorcycle-description">
        ${motorcycle.about}
        </p>
      </div>
      ${isOwner ? getButtons(motorcycle._id) : ""}
    </div>
  </div>
</section>
`;

function getButtons(id) {
    return html`
    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
        <a href="/edit/${id}" id="edit-btn">Edit</a>
        <a href="/delete/${id}" id="delete-btn">Delete</a>
      </div>`;
}

export async function showMoreInfoView(ctx) {
    const motorID = ctx.params.id;
    const motorcycle = await get(`/data/motorcycles/${motorID}`);
    const isOwner = hasOwner(motorcycle._ownerId);
    render(moreInfoView(motorcycle, isOwner));
}