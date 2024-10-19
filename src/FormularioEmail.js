import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const FormularioEmail = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Email inválido')
                .required('O email é obrigatório'),
        }),
        onSubmit: (values) => {
            alert(`Email enviado: ${values.email}`);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: 'red' }}>{formik.errors.email}</div>
                ) : null}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioEmail;