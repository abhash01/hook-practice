import React,{useState,useEffect} from 'react';
import Loading from './useEffecct/Loading';
import Cards from './useEffecct/Cards';

const UseEffectApi = () => {

    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const getUsers = async () => {
        try{
            setLoading(false);
            const response = await fetch('https://api.github.com/users');
            setUser(await response.json());
        }catch(error){
            console.log("my error");
        }
        
    }
    useEffect(() => {
        getUsers();
    },[])

    if(loading){
        return <Loading/>;
    }
    return (
        <Cards users={users}/>
    )
}

export default UseEffectApi
