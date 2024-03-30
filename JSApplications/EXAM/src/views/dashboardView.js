import { get } from '../data/request.js';
import { html, render } from '../lib.js';

const allItemsView = (items) => {

    if (items.length === 0) {
        return html`
        <h3 class="heading">Market</h3>
        <section id="dashboard">
        <h3 class="empty">No Items Yet</h3>
        </section>`;
    }

    return html`
    <h3 class="heading">Market</h3>
  <section id="dashboard">
    ${items.map(item=> singleItemView(item))}
  </section>
    `;
}

const singleItemView = (item) => html`
<div class="item">
<img src="${item.imageUrl}" alt="example1" />
<h3 class="model">${item.item}</h3>
<div class="item-info">
  <p class="price">Price: €${item.price}</p>
  <p class="availability">${item.availability}</p>
  <p class="type">Type: ${item.type}</p>
</div>
<a class="details-btn" href="/details/${item._id}">Uncover More</a>
</div>
`;




export async function showAllItemsView(ctx) {
    const data = await get("/data/cyberpunk?sortBy=_createdOn%20desc");
    render(allItemsView(data));
}
