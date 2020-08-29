import { HEROES__CREATE, HEROES__FETCH } from 'actions/heroes'

export default function (state = {}, { type, payload }) {
    switch (type) {
        case HEROES__FETCH:
            return payload
        case HEROES__CREATE:
            return { payload, ...state }

        default:
            return state
    }
}
