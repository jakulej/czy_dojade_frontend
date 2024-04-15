function getToken(){

    const token = sessionStorage.getItem('token')
    if (token){
        const userToken = JSON.parse(token)
    }
    else {
        throw new Error("Token is null!")
    }

}

function setToken(userToken: any){
    sessionStorage.setItem('token', JSON.stringify(userToken))
}

export{
    setToken,
    getToken
}