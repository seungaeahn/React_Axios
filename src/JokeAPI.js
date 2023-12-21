import React, {useEffect, useState} from "react";
import axios from 'axios';

const JokeAPI = () => {
    const [data, setData] = useState('');

     /*
        useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
                    setJoke(response.data.joke || `${response.data.setup} ${response.data.delivery}`);
                }catch (err){
                    console.log("err",err);
                }
            };
            fetchData();
        },[]);
        ↓ 아래 버전으로 변경해서 사용하면 사용 가능
    */
   
    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(response => {
            setData(response.data.joke || `${response.data.setup} ${response.data.delivery}`);
        })
        .catch(error => {
            console.log('404 error',error);
        });
    }, []);

    return (
        <div >
            <h2>농담한번읽어봐</h2>
            {data && <p>{data}</p>}
        </div>
    )
}

export default JokeAPI;