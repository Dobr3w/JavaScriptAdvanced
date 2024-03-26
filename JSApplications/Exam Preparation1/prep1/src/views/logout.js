import { userHelper } from "../utility/userHelper.js";
import { userService} from "../service/userService.js"; 

export async function logout(ctx) {
    await userService.logout();
    userHelper.clearUserData();
    ctx.updateNav();
    ctx.goTo("/");
}