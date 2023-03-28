import {useForm} from "react-hook-form";

export const Contact = ()=> {
    const {register, handleSubmit} = useForm();
    
    function onSubmit (formData) {
        console.log(formData);
    }
    
    return(
        <div className='contact-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="contact_subject">Sujet: </label>
                    <input defaultValue='Sujet' {...register('subject')}/>
                </div>
                <div>
                    <label htmlFor="contact_message">Message: </label>
                    <textarea defaultValue='Message'{...register('message')}></textarea>
                </div>
                <input type="submit" value='Envoyer'/>
            </form>
        </div>
    )
}