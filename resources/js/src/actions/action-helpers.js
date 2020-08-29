export const dispatchHelper = (request, type, cb = undefined) => {
    return function (dispatch) {
        return request
            .then(({ data }) => {
                if (cb) {
                    cb(true)
                }
                return dispatch(onSuccess(type, data))
            })
            .catch((error) => {
                if (cb) {
                    cb(false)
                }
                return dispatch(onError(error))
            })
    }
}

export function onSuccess (type, data) {
    return { type: type, payload: data }
}

export const onError = (error) => {
    //should print error
    console.log(error)
}
