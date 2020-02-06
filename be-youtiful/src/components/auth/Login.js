import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';


const Login = (props) => {


    const alertContext =  useContext(AlertContext)
    const authContext =  useContext(AuthContext)

    const {setAlert} = alertContext;
    const {login, error, clearErrors, isAuthenticated } = authContext;
    
    
     useEffect( ()=> {
        if(isAuthenticated){
            props.history.push('/book')
        }


         if(error){
             setAlert(error,'danger');
             clearErrors();
             
         }
         // eslint-disable-next-line
     },[error, isAuthenticated, props.history]);




    const [client, setClient] = useState({
        email:'',
        password : '',
        
    })

    const {email, password} = client;

    const onChange = e => setClient({...client, [e.target.name]: e.target.value })

    const onSubmit = (e) =>{
        e.preventDefault();
        if(email == '' || password==''){
            setAlert('Please fill in all fields', 'danger')
        }else{
            login({
                email,
                password
            }) 

            
        }
        
    }

    return(
        <div className="form-primary">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email"  name="email" value={email} required onChange={onChange}/>

                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password"  name="password" required value={password} onChange={onChange}/>
                </div>
                

                <input type="submit" value="Login" className="btn btn-primary btn-block"/>

            </form>
        </div>
    )
}


export default Login