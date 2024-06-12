const domain = 'http://localhost:8080'

const SummaryApi = {
    signUp: {
        url: `${domain}/api/signup`,
        method: 'POST'
    },
    signIn: {
        url: `${domain}/api/signin`,
        method: 'POST'
    },
    current_user: {
        url: `${domain}/api/user-details`,
        method: 'GET'
    },
    loggout_user: {
        url: `${domain}/api/userlogout`,
        method: 'GET'
    }
}

export default SummaryApi;