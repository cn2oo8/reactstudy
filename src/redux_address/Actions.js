export const PROVINCE_CHANGE = 'PROVINCE_CHANGE'
export const CITY_CHANGE = 'CITY_CHANGE'

export function provinceChange(addr) {
    return {
        type: PROVINCE_CHANGE,
        addrId:addr
    }
}

export function cityChange(addr) {
    return {
        type: CITY_CHANGE,
        addrId:addr
    }
}