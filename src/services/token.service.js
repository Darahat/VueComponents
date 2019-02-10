
const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken() {
        const vuexState = JSON.parse(window.localStorage.vuex).auth
        console.log(vuexState)
        return vuexState
    },
}
export default TokenService
