import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Label = styled.label`
  padding-bottom: 0.5rem;
  font-size: 1rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  height: 1.5rem;
  font-size: 0.8rem;
`;

const SaveButton = styled.button`
  max-width: 8rem;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: lightblue;

    box-shadow: 1px 1px lightgray;
  }
`;

const AddUser = props => {
  const initialFormState = { id: null, name: '', department: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.department) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Label>Name</Label>
      <Input
        onChange={handleInputChange}
        value={user.name}
        type="text"
        name="name"
      />
      <Label>Department</Label>
      <Input
        onChange={handleInputChange}
        value={user.department}
        type="text"
        name="department"
      />
      <SaveButton>Add New User</SaveButton>
    </Form>
  );
};

export default AddUser;
