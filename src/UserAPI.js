import React, {useEffect, useState} from "react";
import axios from 'axios';

const UserAPI = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log('error 발생!', error)
        });
    }, []);

    return (

        <>
            <div>
                <h1>관리자 사이트</h1>
            </div>
        {data ? (
            <ul>
                {data.map(user => (
                    
                   
                    <div key={user.id}>
                    
                    <p>이름: {user.username}</p>
                    <p>이메일: {user.email}</p>

                    <p>주소: {user.address && user.address.street}</p>

                    <p>전화번호: {user.phone}</p>
                    <p>웹사이트: {user.website}</p>
                    ---------------------------------------------
                    </div>
                ))}
            </ul>
        ) : (
            <p>데이터가 없습니다.</p>)
    }
        </>
    )
}

export default UserAPI;