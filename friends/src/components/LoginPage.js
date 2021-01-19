import axios from 'axios';
import React, {useState} from 'react'
// import {Route} from 'react-router-dom'

export const LoginPage = (props) => {

const [formState, setFormState ] = useState({
    username: '',
    password: ''
})
const [isLoading, setIsLoading ] = useState(false)


const handleChanges = e => {
	console.log(e.target.name)
    console.log(e.target.value)
    setFormState({
				...formState,
        [e.target.name] : e.target.value
    })
}



const login = (e) => {
	console.log(login)
		setIsLoading(true);
		e.preventDefault();
		console.log('formState', formState)
    	axios.post("http://localhost:5000/api/login", formState)
        	.then(res => {
					console.log(res)
					localStorage.setItem("token", res.data.payload)
					props.history.push("/friendslist")
					setIsLoading(false);
					
				})
        	.catch(err=>{
					console.log(err)
					setIsLoading(false);
				})
}

return(
<div>
	{(!isLoading ? "" : <p>Loading...</p>)}Login Page
		<form onSubmit={login}>
			<input
				type="text"
				name="username"
				placeholder="username"
				value = {formState.username}
				onChange = {handleChanges} 
				/>
				
			<input
				type="text"
				name="password"
				placeholder="password"
				value = {formState.password}
				onChange = {handleChanges} 
				/>

			<button>Login</button>

		</form>
</div>
)
}