import {types} from "./types";


export function changeTodoInputAction (value) {
    return {
        type: types.CHANGE_TODO_INPUT,
        payload: value
    }
}

export function addTodoAction (todo) {
    return {
        type: types.ADD_TODO,
        payload: todo
    }
}

export function deleteTodoAction (id) {
    return {
        type: types.DELETE_TODO,
        payload: id
    }
}

export function changeStatusAction (objTodo) {
    return {
        type: types.CHANGE_STATUS,
        payload: objTodo
    }
}

export function changeTitle () {
    return {
        type: types.CHANGE_TITLE
    }
}

export function sayHelloAction () {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(changeTitle())
        },3000)

    }
}


function usersInfoAction (users) {
    return {
        type:types.USERS,
        payload: users
    }
}

export function getUsersAction () {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();
        dispatch(usersInfoAction())
        console.log(users)
    }
}