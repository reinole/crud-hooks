import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import preserve from '@ludens-reklame/preserve';

//components
import UserTable from './Tables/userTable';
import AddUser from './Forms/addUser';
import EditUserForm from './Forms/editUserForm';

const Wrapper = styled.div`
  display: flex;
  margin: auto;
  width: 55rem;
  justify-content: center;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2.5rem 0;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PageTitle = styled.h1`
  margin: auto;
`;

const SectionTitle = styled.h2``;

const Section = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const App = () => {
  const browserData = preserve('browserData');
  let data = browserData.get();

  useEffect(() => {
    if (data === null) {
      browserData.set(userData);
    }
  }, []);

  let userData = [
    { id: 1, name: 'Øyvind', department: 'Technology' },
    { id: 2, name: 'Regine', department: 'Creative' },
    { id: 3, name: 'Tor Erik', department: 'Content' },
    { id: 4, name: 'Hanne', department: 'SEO' },
    { id: 5, name: 'Ole Christian', department: 'Technology' }
  ];
  console.log(data);

  const initialFormState = { id: null, name: '', department: '' };

  const [editing, setEditing] = useState(false);
  const [users, setUsers] = useState(data ? data : userData);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    user.id = users.length + 1;
    browserData.set([...users, user]);
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    const deleteQ = users.filter(user => id !== user.id);

    setUsers(deleteQ);
    browserData.set(deleteQ);
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      department: user.department
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <Wrapper>
      <PageTitle>CRUD with React Hooks</PageTitle>
      <SectionWrapper>
        {editing ? (
          <Section>
            <SectionTitle>Edit user</SectionTitle>
            <EditUserForm
              currentUser={currentUser}
              editing={editing}
              updateUser={updateUser}
              setEditing={setEditing}
            />
          </Section>
        ) : (
          <Section>
            <SectionTitle>Create user</SectionTitle>
            <AddUser addUser={addUser} />
          </Section>
        )}

        <Section>
          <SectionTitle>Edit user</SectionTitle>
          <UserTable deleteUser={deleteUser} editRow={editRow} users={users} />
        </Section>
      </SectionWrapper>
    </Wrapper>
  );
};

export default App;
