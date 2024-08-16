import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const BASE_URL = `http://ip:PORT`



export const useLogin = () => {
    const navigate = useNavigate();
    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();


    const handleClick = async (data) => {
        try {
            // const res = await axios.post(`${BASE_URL}/`)

            console.log(data);
            navigate("/register")
            
        } catch (error) {
            console.log(error);
        }

        // console.log(data);
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