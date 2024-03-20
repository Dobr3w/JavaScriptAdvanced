const createSection = document.querySelector("div[data-view-name='create']");
const form = createSection.querySelector("form");
form.addEventListener("submit", onSubmit);

let context = null;
export async function showCreateView(ctx) {
    context = ctx;
    context.render(createSection);
}

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form)
}