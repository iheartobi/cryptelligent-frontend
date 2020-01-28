const API = 'https://whispering-hamlet-76141.herokuapp.com/';



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





