import React, { useState } from 'react';
import './style.css';

export const ValidationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case 'username':
        newErrors.username = value.trim() === '' ? 'Username is required' : '';
        break;
      case 'email':
        newErrors.email = !/\S+@\S+\.\S+/.test(value)
          ? 'Invalid email format'
          : '';
        break;
      case 'password':
        newErrors.password =
          value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateField(name, value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!Object.values(errors).some((error) => error !== '')) {
      // Tu można umieścić logikę obsługi poprawnie wypełnionego formularza
      console.log('Form submitted:', formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="basicForm-flex-column">
        <label>Nazwa użytkownika</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          aria-invalid={errors.username ? 'true' : 'false'}
          required={true}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div className="basicForm-flex-column">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          required={true}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="basicForm-flex-column">
        <label>Hasło</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          aria-invalid={errors.password ? 'true' : 'false'}
          required={true}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
};
