export function savedata(payload) {
    return {
        type: 'SAVEDATA',
        payload: payload
    }
}

export function upload(payload) {
    return {
       type: 'UPLOAD',
       payload: payload,
    }
}

export function setloading(payload) {
    return {
        type: 'SET_LOADING',
        payload: payload
    }
}

export function savebag(payload) {
    return {
        type: 'SAVE_BAGS_COMPLETED',
        payload: payload
    }
}

export function savebagsdata(payload) {
    return {
        type: 'SAVE_BAGS_DATA_COMPLETED',
        payload: payload
    }
}

