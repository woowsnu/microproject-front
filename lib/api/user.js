import baseURL from "."

// Regist user API
export const registUserAPI = (user) => fetch(`${baseURL}/api/users/signup`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
});

// login user API
export const loginUserAPI = (user) => fetch(`${baseURL}/api/users/login`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
}).then(res => res.json());
