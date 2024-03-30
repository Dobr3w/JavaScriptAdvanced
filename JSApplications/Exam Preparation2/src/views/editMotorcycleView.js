import { get, put} from '../data/request.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const editMotorcycleView = (motorcycle) => html`
      <section id="edit">
        <h2>Edit Motorcycle</h2>
        <div class="form">
          <h2>Edit Motorcycle</h2>
          <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="model" id="model" placeholder="Model" value="${motorcycle.model}"/>
            <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" value="${motorcycle.imageUrl}"/>
            <input type="number" name="year" id="year" placeholder="Year" value="${motorcycle.year}"/>
            <input type="number" name="mileage" id="mileage" placeholder="mileage" value="${motorcycle.mileage}"/>
            <input type="number" name="contact" id="contact" placeholder="contact" value="${motorcycle.contact}"/>
            <textarea id="about" name="about" placeholder="about" rows="10" cols="50">${motorcycle.about}</textarea>
            <button type="submit">Edit Motorcycle</button>
          </form>
        </div>
      </section>
`;

// let context = null;
let id = null;
export async function showEditMotorcycleView(ctx) {
    id = ctx.params.id;
    const motorcycle = await get(`/data/motorcycles/${id}`);
    render(editMotorcycleView(motorcycle));
}


async function onEdit(e) {
    e.preventDefault();
    page.start();

    const formData = new FormData(e.target);
    let { model, imageUrl, year, mileage, contact, about} = Object.fromEntries(formData);
    const motorData = { model, imageUrl, year, mileage, contact, about};

    if(!model || !imageUrl || !year || !mileage || !contact || !about) {
        return alert("Error Editing Motorcycle!");
    }

    await put(`/data/motorcycles/${id}`, motorData);
    page.redirect(`/data/motorcycles/${id}`);
}