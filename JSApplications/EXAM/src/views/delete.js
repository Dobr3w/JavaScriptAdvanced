import { del } from "../data/request.js";
import { page } from "../lib.js";

export async function deleteItem(ctx) {
    page.start();
    const id = ctx.params.id;
    const res = confirm("Are you sure?");
    if (res) {
        await del(`/data/cyberpunk/${id}`);
    }

    page.redirect("/dashboard");
}