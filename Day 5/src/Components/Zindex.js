import '../Assests/zindex.css'
export const Zindex = ()=> {
    return (
        <>
        <body>
        <div className="cen">
        <div className="one">
            <div className="login">
                <h1>Login</h1>
                <label><input type="textfield" placeholder="Name"></input></label>
                <label><input type="password" placeholder="Password"></input></label>
                <label><input type="date"></input></label>
            </div>


            <div className="sign">
                <h1>Sign up</h1>
                <label><input type="textfield" placeholder="Name"></input></label>
                <label><input type="password" placeholder="Password"></input></label>
                <label><input type="date"></input></label>

            </div>
        </div>
        <div className="two">Welcome!!! </div>
        </div>
        </body>
        </>
    )
}