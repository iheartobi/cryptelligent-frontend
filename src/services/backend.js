const API = 'http://localhost:3000/';


export function getUsers() {
    return fetch(`${API}/users`).then(res => res.json())
}

export function getAuthToken(loginData) {
    return fetch(`${API}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(loginData)
    }).then(res => res.json())
}

export function addNewUser(values) {
    return fetch(`${API}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(values)
        
    }).then(res => res.json())
}

export function getUserInfo(id) {
    return fetch(`${API}/users/${id}`).then(res => res.json())
}

export function getCoins() {
    return fetch(`${API}/coins`).then(res => res.json())
}

export function getTeams() {
    return fetch(`${API}/teams`).then(res => res.json())
}

export function createTeam(formData) {
    return fetch(`${API}/teams`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(res => res.json())
}

export function getLeagues() {
    return fetch(`${API}/leagues`).then(res => res.json())
}

export function createLeague(formData) {
    return fetch(`${API}/leagues`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(res => res.json())
}


