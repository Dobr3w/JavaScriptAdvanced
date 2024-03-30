import { get, put} from '../data/request.js';
import { html, render, page } from '../lib.js';

const editItemView = (item) => html`
<section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form class="edit-form" @submit="${onEdit}">
        <input type="text" name="item" id="item" placeholder="Item" value="${item.item}"/>
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
          .value="${item.imageUrl}"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro" value="${item.price}"
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information" value="${item.availability}"
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type" value="${item.type}"
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        >${item.description}</textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

let id = null;
export async function showEditItemView(ctx) {
    id = ctx.params.id;
    const item = await get(`/data/cyberpunk/${id}`);
    render(editItemView(item));
}

async function onEdit(e) {
    e.preventDefault();
    page.start();

    const formData = new FormData(e.target);
    let { item, imageUrl, price, availability, type, description} = Object.fromEntries(formData);
    const itemData = { item, imageUrl, price, availability, type, description};

    if( !item || !imageUrl || !price || !availability || !type || !description) {
        return alert("Error Editing this Item!");
    }

    await put(`/data/cyberpunk/${id}`, itemData);
    page.redirect(`/details/${id}`);
}