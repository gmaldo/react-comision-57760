import React, { useState } from 'react';
import './CheckoutForm.css'; // Asegúrate de que la ruta es correcta

function Checkout({handleCheckout}) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: ''
    });
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        //regex q valida mail
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};
        
        // Validar teléfono 10 digitos 
        if (!/^\d{10}$/.test(formData.phone)) {
            validationErrors.phone = 'El teléfono debe contener 10 dígitos.';
        }
        // Validar emails
        if (!validateEmail(formData.email)) {
            validationErrors.email = 'El email no es válido';
        }
        if (formData.email !== formData.confirmEmail) {
            validationErrors.confirmEmail = 'Los emails no coinciden';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            handleCheckout(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Nombre"
                required
            />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Apellido"
                required
            />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Teléfono"
                required
            />
            {errors.phone && <p className='error'>{errors.phone}</p>}
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
            />
            {errors.email && <p className='error'>{errors.email}</p>}
            <input
                type="email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                placeholder="Confirmar Email"
                required
            />
            {errors.confirmEmail && <p className='error'>{errors.confirmEmail}</p>}
            <button type="submit">Registrar</button>
        </form>
    );
}

// Guardar los datos en la base de datos
function saveToDatabase(data) {
    console.log("Datos enviados a la base de datos:", data);
}

export default Checkout;