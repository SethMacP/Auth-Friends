
import React , {useState}from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import {  Form, FormGroup,  Input, } from 'reactstrap';

export const AddFriend = () => {

    const [newFriend, setNewFriend] = useState({
        
            name: "",
            age: "",
            email:"",
            id: Date.now()
            
    })

    const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]:e.target.value
        })
    }

    const submitFriend = e => {
        e.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/friends", newFriend)
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
        setNewFriend({
            name: "",
            age: "",
            email:"",
        })
    }

    return(
    <div className="addFriendBox">
        <h6>Add a Friend!</h6>
        <Form onSubmit={submitFriend}>
            <FormGroup>
            <Input
                name='name'
                placeholder="Name"
                value={newFriend.name}
                onChange={handleChanges}
            />
            </FormGroup>
            <FormGroup>
            <Input
                name='age'
                placeholder="Age"
                value={newFriend.age}
                onChange={handleChanges}
            />
            </FormGroup>
            <FormGroup>
            <Input
                name='email'
                placeholder="Email"
                value={newFriend.email}
                onChange={handleChanges}
            />
            </FormGroup>
            <button onClick={()=>{alert("Added!")}}>ADD!</button>
        </Form>
        
    </div>)
}