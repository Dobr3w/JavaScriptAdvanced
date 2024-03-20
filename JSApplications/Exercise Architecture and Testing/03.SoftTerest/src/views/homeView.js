const homeSection = document.querySelector("div[data-view-name='home']");

export function showHomeView(ctx) {
    ctx.render(homeSection);
}