import { del } from "../data/request.js";
import { page } from "../lib.js";

export async function deleteMotorcycle(ctx) {
    page.start();
    const id = ctx.params.id;
    const res = confirm("Are you sure for that?");
    if (res) {
        await del(`/data/motorcycles/${id}`);
    }

    page.redirect("/motorcycles");
}