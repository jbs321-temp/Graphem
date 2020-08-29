import { dispatchHelper } from './action-helpers'

export const HEROES__CREATE = 'heroes__create'
export const HEROES__FETCH = 'heroes__fetch'

export function createHero (data, cb) {
    return dispatchHelper(axios.post(`/api/hero`, data), HEROES__CREATE, cb)
}

export function fetchHeroes() {
    return dispatchHelper(axios.get("/api/heroes"), HEROES__FETCH)
}
