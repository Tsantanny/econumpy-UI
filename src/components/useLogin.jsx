import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const BASE_URL = `http://192.168.43.172:8080`

export const useLogin = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState("");
    const [isError, setIsError] = useState(false);

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();


    const handleClick = async (data) => {
        // console.log(data);
        try {
            const isUserExists = await axios.get(`${BASE_URL}/api/${category}/${data.email}`)
            
            if (isUserExists) {

                
                const res = await axios.post(`${BASE_URL}/api/${category}/authentication`, data)
                            
                    if (res.data) {
                        console.log("OK");
                        // console.log(isUserExists.data.username);
                        
                        localStorage.setItem(`email-${data.email}`, data.email)
                        localStorage.setItem(`username-${isUserExists.data.username}`, isUserExists.data.username)
                        navigate("/")
                    }else throw new Error("Connection failed");
            }

        } catch (error) {
            setIsError(!isError);
            console.log(error.message);
            setTimeout(() => {
                setIsError(false)
            }, 3000);
        }

        
    }

    const handleRadioChange = (e) => {
        setCategory(e.target.value)
    }
    /**
     * @param {string} path 
     */
    const navigateTo = (path) => {
        navigate(path)
    }

    return {
        register, handleSubmit, errors, handleClick, navigateTo, handleRadioChange, isError
    }
}