import { post } from '../data/request.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const addMotorcycleView = (onAdd) => html`
<!-- Create Page (Only for logged-in users) -->
<section id="create">
        <h2>Add Motorcycle</h2>
        <div class="form">
          <h2>Add Motorcycle</h2>
          <form class="create-form" @submit="${onAdd}">
            <input type="text" name="model" id="model" placeholder="Model" />
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
            <input type="number" name="year" id="year" placeholder="Year" />
            <input type="number" name="mileage" id="mileage" placeholder="mileage" />
            <input type="text" name="contact" id="contact" placeholder="contact" />
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
            <button type="submit">Add Motorcycle</button>
          </form>
        </div>
      </section>
`;

export function showAddMotorcycleView(ctx) {
    render(addMotorcycleView(createSubmitHandler(onAdd)));
}

async function onAdd(data, form) {

    page.start();

    if (!data || data.model === "" || data.imageUrl == "" | data.year == "" || data.mileage == "" || data.contact == "" || data.about == "") {
        return alert("Error Adding Motorcycles!");
    }

    await post("/data/motorcycles", data);
    form.reset();
    page.redirect("/motorcycles");
}