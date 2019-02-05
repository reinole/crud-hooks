import React, { useState, useEffect } from 'react';
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  width: 8rem;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: lightblue;

    box-shadow: 1px 1px lightgray;
  }
`;

const CancelButton = styled.button`
  width: 8rem;
  height: 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: lightpink;

    box-shadow: 1px 1px lightgray;
  }
`;

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
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
      <ButtonWrapper>
        <SaveButton>Update User</SaveButton>
        <CancelButton onClick={() => props.setEditing(false)}>
          Cancel
        </CancelButton>
      </ButtonWrapper>
    </Form>
  );
};

export default EditUserForm;
