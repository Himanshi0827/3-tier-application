import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Home from './Home'

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const AcademicForm = () => {
  const [formData, setFormData] = useState({
    productname: '',
    name: '',
    productprice: '',
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/students', formData);
      console.log(response.data);
      // Handle success (e.g., show success message)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
      
    <Home></Home>
        <Input type="text" name="productname" placeholder="Product Name" value={formData.productname} onChange={handleChange} />
        <Input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <Input type="text" name="productprice" placeholder="Product Price" value={formData.productprice} onChange={handleChange} />
        {/* <Input type="text" name="semester" placeholder="Semester" value={formData.semester} onChange={handleChange} />
        <Input type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange} /> */}
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default AcademicForm;