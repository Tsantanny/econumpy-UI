import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from './useLogin';
import { useState } from 'react';



export const useRegister  = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState("");

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();


    const handleClick = async (data) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/${category}/add`, category === 'individual' ? 
                {...data, birthdate: null, contact: null, address: null} : 
                {...data, NIF: null, STAT: null, accreditation: null, creationDate: null}
            )
            
            if (res.data) {
                console.log(data, category);
                localStorage.setItem(`${data.email}-category`, category)
                
                navigate("/login")
            }else throw new Error("Register failed");

        } catch (error) {
            errors.isErrors = true;
            console.log(error.message);
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
        register, handleSubmit, errors, handleClick, navigateTo, handleRadioChange
    }
}