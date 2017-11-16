export const SHOW_THROBBER = 'SHOW_THROBBER'
export const HIDE_THROBBER = 'HIDE_THROBBER'

export function showThrobber () {
    return {
        type: SHOW_THROBBER
    }
}

export function hideThrobber () {
    return {
        type: HIDE_THROBBER
    }
}