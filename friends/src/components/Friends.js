
import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const Friends = () => {
    const [friendList, setFriendList] = useState();
   
    // console.log(friendList)

    useEffect(()=>{
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res=>{
                console.log(res.data);
                setFriendList(res.data)
            })
            .catch(err=>console.log(err))
    },[])
        
    
    

    return(
        <>
            <p>Hello Friends:</p>
            {friendList.map(
                friend => (
                    <div 
                        className="friendBox"
                        key={friend.id}>
                        <p>
                            {friend.name}</p>
                        <p>
                            {friend.age}</p>
                        <p>
                            {friend.email}</p>
                    </div>
                )
            )}
        
        </>
    )
}

export default Friends;