import { dataService } from "../api/dataService.js";

const createSection = document.querySelector("div[data-view-name='create']");
const form = createSection.querySelector("form");
form.addEventListener("submit", onSubmit);

let context = null;
export async function showCreateView(ctx) {
    context = ctx;
    context.render(createSection);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const { title, description, imageURL } = Object.fromEntries(formData);

    if (title.length < 6 || description.length < 10 || imageURL.length < 5) {
       return alert("Error creating the idea");
    }

    await dataService.createIdea({title, description, imageURL});
    context.goTo("/dashboard");
    form.reset();
}