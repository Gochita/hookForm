import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {

    const {register, handleSubmit, formState: {errors} }= useForm();

    const onSubmit = (data, e) => {
        console.log(data)

    }

    return (  
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                type="text"
                name="titulo"
                placeholder='titulo'
                className= "form-control my-2"
                {...register('titulo',{required: true, maxLength:30})}
                
                />
                {errors.titulo && errors.titulo.type === "required" && <span>This is required</span>}

                <button className ="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
        
    );
}
 
export default FormHook
