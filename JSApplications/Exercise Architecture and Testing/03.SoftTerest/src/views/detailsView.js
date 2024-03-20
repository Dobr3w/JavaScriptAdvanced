import { dataService } from "../api/dataService.js";
import { hasOwner } from "../utils/userUtils.js";

const detailsSection = document.querySelector("div[data-view-name='details']");

export async function showDetailsView(ctx, data) {
    detailsSection.innerHTML = "";
    const id = data[0];
    ctx.render(detailsSection);

    const idea = await dataService.getIdea(id);
    const isOwner = hasOwner(idea._ownerId);
    detailsSection.innerHTML = createIdeaTemp(idea, isOwner);
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
            ${ isOwner ? "<a class='btn detb' href=''>Delete</a>" : ""}
        </div>
    `;
}