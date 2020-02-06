import React, {useState} from 'react';


const Login = () => {
    const [client, setClient] = useState({
        email:'',
        password : '',
        
    })

    const {email, password} = client;

    const onChange = e => setClient({...client, [e.target.name]: e.target.value })

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log('Login client')
    }

    return(
        <div className="form-primary">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email"  name="email" value={email} onChange={onChange}/>

                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password"  name="password" value={password} onChange={onChange}/>
                </div>
                

                <input type="submit" value="Login" className="btn btn-primary btn-block"/>

            </form>
        </div>
    )
}


export default Login