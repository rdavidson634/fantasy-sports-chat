import tokenService from '../utils/tokenService';

const BASE_URL = '/api/rooms';

export function getAll() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    }).then(res => res.json());
}