import {useForm} from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';


export const useLogin = () => {
    // const navigate = useNavigate();

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();



    const handleClick = (data) => {
        console.log(data);


        // navigate("/register")
    }

    /**
     * @param {string} path 
     */
    // const navigateTo = (path) => {
    //     navigate(path)
    // }

    return {
        register, handleSubmit, errors, handleClick
    }
}