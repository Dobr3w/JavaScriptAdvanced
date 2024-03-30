import { post } from '../data/request.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const addNewItemView = (onAdd) => html`
<section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form class="create-form" @submit="${onAdd}">
        <input type="text" name="item" id="item" placeholder="Item" />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export function showAddNewItemView(ctx) {
    render(addNewItemView(createSubmitHandler(onAdd)));
}

async function onAdd(data, form) {

    page.start();

    if (!data || data.item === "" || data.imageUrl == "" | data.price == "" || data.availability == "" || data.type == "" || data.description == "") {
        return alert(`Error adding new item, Please check all fields!`);
    }

    await post("/data/cyberpunk", data);
    form.reset();
    page.redirect("/dashboard");
}