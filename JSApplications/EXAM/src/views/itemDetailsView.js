import { get } from '../data/request.js';
import { html, render } from '../lib.js';
import { hasOwner } from '../utils.js';

const itemDetailsView = (item, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src="${item.imageUrl}" alt="example1" />
        <p id="details-title">${item.item}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${item.price}</p>
          <p class="details-availability">
          ${item.availability}
          </p>
          <p class="type">Type: ${item.type}</p>
          <p id="item-description">
          ${item.description}
          </p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${isOwner ? getButtons(item._id) : ""}
      </div>
    </div>
  </section>
`;

function getButtons(id) {
    return html`
        <div id="action-buttons">
            <a href="/edit/${id}" id="edit-btn">Edit</a>
            <a href="/delete/${id}" id="delete-btn">Delete</a>
        </div>`;
}

export async function showItemDetailsView(ctx) {
    const itemID = ctx.params.id;
    const item = await get(`/data/cyberpunk/${itemID}`);
    const isOwner = hasOwner(item._ownerId);
    render(itemDetailsView(item, isOwner));
}