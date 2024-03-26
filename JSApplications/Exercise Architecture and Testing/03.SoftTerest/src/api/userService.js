import { requesterMethod} from "./requester.js";

const endPoints = {
    register: "users/register",
    login:  "users/login",
    logout: "users/logout"

}

async function register(data) {
    return await requesterMethod.post(endPoints.register, data);
}

async function login(data) {
    return await requesterMethod.post(endPoints.login, data);
}

async function logout() {
return requesterMethod.get(endPoints.logout);
}

export {
    register,
    login,
    logout
}