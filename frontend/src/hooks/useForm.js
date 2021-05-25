import {useState} from 'react'

export const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState)
    const handleInputChange = ({target})=>{
        const value = target.type === 'checkbox' ? target.checked : target.type === 'number' ? parseInt(target.value,10) : target.value;
        setFormState({
            ...formState,
            [target.name]: value
        })
    }
    return [formState, handleInputChange]
}
