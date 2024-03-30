import { dataService } from "../service/dataService.js";

export async function deleteEvent(ctx) {
    const id = ctx.params.id;
    const res = confirm("Are you sure for that?");
    if (res) {
        await dataService.deleteEvent(id);
        ctx.goTo("/allEvents");
    }
}