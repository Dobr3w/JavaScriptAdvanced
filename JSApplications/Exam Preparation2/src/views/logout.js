import { logout } from "../data/users.js"
import { page, updateNav } from "../lib.js";

export async function logoutUser(){
    logout();
    updateNav();
    page.redirect("/");
}