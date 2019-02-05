import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const Table = styled.table``;

const Thead = styled.thead``;

const Th = styled.th``;

const Tbody = styled.tbody`
  border-top: 2px solid black;
`;

const Tr = styled.tr``;

const Td = styled.td`
  ${props =>
    props.buttons &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

const Button = styled.button`
  max-width: 8rem;
  height: 1.4rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  &:hover {
    background-color: lightblue;

    box-shadow: 1px 1px lightgray;
  }
`;

const UserTable = props => {
  if (props === undefined || !props) return null;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Department</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.users.length > 0 ? (
          props.users.map(user => {
            return (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.department}</Td>
                <Td buttons>
                  <Button onClick={() => props.editRow(user)}>Edit</Button>
                  <Button onClick={() => props.deleteUser(user.id)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            );
          })
        ) : (
          <Tr>
            <Td>No users</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  );
};

export default UserTable;
