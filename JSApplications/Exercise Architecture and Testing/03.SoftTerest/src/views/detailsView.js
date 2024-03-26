import { dataService } from "../api/dataService.js";
import { hasOwner } from "../utils/userUtils.js";

const detailsSection = document.querySelector("div[data-view-name='details']");
let context = null;

export async function showDetailsView(ctx, data) {
    context = ctx;
    detailsSection.innerHTML = "";
    ctx.render(detailsSection);
    const id = data[0];

    const idea = await dataService.getIdea(id);
    const isOwner = hasOwner(idea._ownerId);
    detailsSection.innerHTML = createIdeaTemp(idea, isOwner);
    detailsSection.querySelector("a").addEventListener("click", onDelete);
}

async function onDelete(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    debugger
    await dataService.deleteIdea(id);
    context.goTo("/dashboard");
}

function createIdeaTemp(data, isOwner) {
    return `
        <img class="det-img" src="${data.img}" />
        <div class="desc">
            <h2 class="display-5">${data.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${data.description}</p>
        </div>
        <div class="text-center">
            ${isOwner ? `<a class='btn detb' data-id=${data._id} href=''>Delete</a>` : ""}
        </div>
    `;
}