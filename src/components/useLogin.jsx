import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const BASE_URL = `http://192.168.0.31:8080`



export const useLogin = () => {
    const navigate = useNavigate();
    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();


    const handleClick = async (data) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/individual/authentication`, data)
            
            if (res.data) {
                localStorage.setItem('email', data.email)
    
                navigate("/")
            }else throw new Error("Connection failed");

        } catch (error) {

            errors.isErrors = true;
            console.log(error.message);
        }
    }

    /**
     * @param {string} path 
     */
    const navigateTo = (path) => {
        navigate(path)
    }

    return {
        register, handleSubmit, errors, handleClick, navigateTo
    }
}