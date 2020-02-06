import React, {useState,useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
    const alertContext =  useContext(AlertContext)
    const authContext =  useContext(AuthContext)

    const {setAlert} = alertContext;
    const {register, error, clearErrors, isAuthenticated} = authContext;
    
    
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
        name: '',
        email:'',
        password : '',
        password2: ''
    })


    const {name, email, password, password2} = client;

    const onChange = e => setClient({...client, [e.target.name]: e.target.value })

    const onSubmit = e =>{
        e.preventDefault();
        if (name === '' || email === '' || password ==='') {
            setAlert('please enter all fields', 'danger');
            
        }else if (password !== password2){
            setAlert('Passwords do not match', 'danger');

        }else{
            register({
                name,
                email,
                password
            });
        }
        
    }

    return(
        <div className="form-primary">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"  name="name" value={name} required onChange={onChange}/>

                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email"  name="email" value={email} required  onChange={onChange}/>

                </div>
                <div className="form-group">
                    <label htmlFor="name">Password</label>
                    <input type="password"  name="password" required value={password} minLength="6" onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Confirm Password</label>
                    <input type="password"  name="password2" required  value={password2} minLength="6" onChange={onChange}/>
                </div>

                <input type="submit" value="Register" className="btn btn-primary btn-block"/>

            </form>
        </div>
    )
}


export default Register