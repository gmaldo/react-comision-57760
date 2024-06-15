import React, { useState } from 'react';
import './Checkout.css'; // Asegúrate de que la ruta es correcta

function Checkout() {
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

        // Validar emails
        if (!validateEmail(formData.email)) {
            validationErrors.email = 'El email no es válido';
        }
        if (formData.email !== formData.confirmEmail) {
            validationErrors.confirmEmail = 'Los emails no coinciden';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            saveToDatabase(formData);
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
            />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Apellido"
            />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Teléfono"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            {errors.email && <p>{errors.email}</p>}
            <input
                type="email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                placeholder="Confirmar Email"
            />
            {errors.confirmEmail && <p>{errors.confirmEmail}</p>}
            <button type="submit">Registrar</button>
        </form>
    );
}

// Guardar los datos en la base de datos
function saveToDatabase(data) {
    console.log("Datos enviados a la base de datos:", data);
}

export default Checkout;
