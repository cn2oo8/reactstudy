export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export function addItem(text) {
    return {
        type: ADD_ITEM,
        text
    }
}

export function removeItem(text) {
    return {
        type: REMOVE_ITEM,
        text
    }
}