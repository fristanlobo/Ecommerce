const domain = 'http://localhost:8080'

const SummaryApi = {
    signUp: {
        url: `${domain}/api/signup`,
        method: 'POST'
    },
    signIn:{
        url:`${domain}/api/signin`,
        method:'POST'
    }
}

export default SummaryApi;