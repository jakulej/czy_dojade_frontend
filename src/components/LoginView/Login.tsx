function Login(){
    return(
        <div>
            <form>
                <label>
                    Login:
                </label>
                    <input type="text" name="login" id="login"/>
                <label>
                    Password: 
                </label>
                    <input type="password" name="password" id="password"/>
                <input type="submit" value="Login"/>
                <input type="button" value ="Register"/>
            </form>
        </div>
    )
}

export default Login;