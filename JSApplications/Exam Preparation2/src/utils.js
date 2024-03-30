export function setUserData(data){
    sessionStorage.setItem('user', JSON.stringify(data));
}

export function getUserData(){
    return JSON.parse(sessionStorage.getItem('user'));
}

export function clearUserData(){
    sessionStorage.removeItem('user');
}

function getUserId() {
    const userData = getUserData();
    return userData?._id;
}

export function hasOwner(ownerId) {
    const id = getUserId();
    return ownerId === id;
}

//TODO add custom validation
export function createSubmitHandler(callback){
    return function (event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(data), event.target);
    };
}