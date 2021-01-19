
import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


export const Friends = () => {
    const [friendList, setFriendList] = useState();
    const [isLoading, setIsLoading] = useState(false)
   
    // console.log(friendList)

    useEffect(()=>{
        setIsLoading(true);
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res=>{
                console.log("use effecT",res.data);
                setFriendList(res.data)
                setIsLoading(false);
            })
            .catch(err=>{
                console.log(err)
                setIsLoading(false);
                })
    },[setFriendList])
        
    
    

    return(
        <>
            <p>Hello Friends:</p>
            {(isLoading ? <p>Loading Friends</p> : "")}
            <div className="friendContainer">
                {friendList && friendList.map(
                    friend => (
                        <div 
                            className="friendBox"
                            key={friend.id}>
                                <Card>
                                    <CardBody>
                                    <CardTitle tag="h5">{friend.name}</CardTitle>
                                    <CardText>Age: {friend.age}</CardText>
                                    <CardText>
                                    <small className="text-muted">E: {friend.email}</small>
                                    </CardText>
                                    
                                    </CardBody>
                                </Card>
                        </div>
                    )
                )}
            </div>
        
        </>
    )
}

export default Friends;



