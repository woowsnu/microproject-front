import baseURL from '.'; 

// Add POST API
export const addPostAPI = (post) => fetch(`${baseURL}/api/post`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
});




// PUT todos API
export const putTodoAPI = (data) => fetch(`${baseURL}/api/v1/todos`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});


// DELETE Todos API
export const deleteTodoAPI = (id) => fetch(`${baseURL}/api/v1/todos/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
});



