const COINSAPI = 'http://localhost:3000/coins/';
const USERSAPI = 'http://localhost:3000/users/';
const TEAMSAPI = 'http://localhost:3000/teams/';
const LEAGUESAPI = 'http://localhost:3000/leagues/';

export function getUsers() {
    return fetch(USERSAPI).then(res => res.json())
}

export function createUser(formData) {
    return fetch(USERSAPI, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(res => res.json())
}

export function getCoins() {
    return fetch(COINSAPI).then(res => res.json())
}

export function getTeams() {
    return fetch(TEAMSAPI).then(res => res.json())
}

export function createTeam(formData) {
    return fetch(TEAMSAPI, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(res => res.json())
}

export function getLeagues() {
    return fetch(LEAGUESAPI).then(res => res.json())
}

export function createLeague(formData) {
    return fetch(LEAGUESAPI, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(res => res.json())
}


