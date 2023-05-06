import {Link} from "react-router-dom"
import {useState} from 'react';
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = async(ev) =>{
     ev.preventDefault();
     try{ 
        await axios.post('/login',{email,password});
        alert("Login successul . Now you can log in")
     }catch(e){
        alert("Login Failed . Try after sometime")
     }
} 

    return (
        <div className='mt-4 grow flex items-center justify-around'>
        <div className="mb-64">
        <h1 className='text-4xl text-center mb-4'>Login</h1>
           <form className='max-w-md mx-auto' onSubmit={handleLoginSubmit}>
               <input type="email" 
               placeholder="your@email.com" 
               value={email} 
               onChange={ev =>setEmail(ev.target.value)}/>
               <input type="password" 
               placeholder="password"
               value={password} 
               onChange={ev =>setPassword(ev.target.value)}/>
               <button className='primary'>Login</button>
               <div className="text-center py-2 text-grap-500">
               Don't have an account yet?
               <Link className="underline text-black" to={'/register'}>Register now</Link>
               </div>
            </form> 
        </div>
        </div>
    )
}

export default LoginPage; 