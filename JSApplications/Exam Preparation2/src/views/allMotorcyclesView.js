import { get } from '../data/request.js';
import { html, render } from '../lib.js';
import { createSubmitHandler } from '../utils.js';

const allMotorcyclesView = (motorcycles) => {

    if (motorcycles.length === 0) {
        return html`
        <h2>Available Motorcycles</h2>
        <section id="dashboard">
        <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
        </section>`;
    }

    return html`
<!-- Dashboard page -->
      <h2>Available Motorcycles</h2>
      <section id="dashboard">
        ${motorcycles.map(motor => singleMotorcycleTemplate(motor))}
      </section>`;

};


const singleMotorcycleTemplate = (motorcycle) => html`
<div class="motorcycle">
          <img src="${motorcycle.imageUrl}" alt="example1" />
          <h3 class="model">${motorcycle.model}</h3>
          <p class="year">Year: ${motorcycle.year}</p>
          <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
          <p class="contact">Contact Number: ${motorcycle.contact}</p>
          <a class="details-btn" href="/data/motorcycles/${motorcycle._id}">More Info</a>
        </div>
`;

export async function showAllMotorcycleView(ctx) {
    const data = await get("/data/motorcycles?sortBy=_createdOn%20desc");
    render(allMotorcyclesView(data));
}
