function Login(){
    return(
        <div>
            <form>
                <label>
                    Login:
                    <input type="text" name="login"/>
                </label>
                <label>
                    Password: 
                    <input type="password" name="password"/>
                </label>
            </form>
        </div>
    )
}

export default Login;