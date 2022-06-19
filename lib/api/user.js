import baseURL from "."

// Regist user API
export const registUserAPI = (user) => fetch(`${baseURL}/regist`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})

// login user API
export const loginUserAPI = (user) => fetch(`${baseURL}/login`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})