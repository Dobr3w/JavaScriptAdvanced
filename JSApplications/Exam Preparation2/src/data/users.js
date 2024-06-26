import { clearUserData, setUserData } from "../utils.js";
import { post, get } from "./request.js";

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}
//TODO adapt user profile to exam requirements (identity, extra properties, etc);
export async function login(email, password){
    const result = await post(endpoints.login, { email, password }); 

    setUserData(result);
}

export async function register(email, password){
    const result = await post(endpoints.register, { email, password }); 

    setUserData(result);
}

export async function logout(){
    const promise = get(endpoints.logout); 

    clearUserData();
    await promise;
}
