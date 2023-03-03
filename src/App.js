import { useState, useEffect } from 'react';
import './App.css';
import UsersList from './Components/User/UsersList';
import Form from './Components/NewUserForm/Form';
import UID from './Components/RandomIDGenerator/UID';
import ErrorModal from './Components/UI/ErrorModal';

function App() {

  //attach esc btn event listener to the modal to close it on press of esc button
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === 'Escape') {
        updateModal('', '', false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])

  const [showModal, setShowModal] = useState({
    title: '',
    content: '',
    show: false
  });

  const [users, setUsers] = useState([{
    name: 'Max',
    age: 31,
    id: UID()
  },
  {
    name: 'Jamie',
    age: 25,
    id: UID()
  },
  {
    name: 'Max',
    age: 31,
    id: UID()
  },
  {
    name: 'Ronald',
    age: 30,
    id: UID()
  },
  ]);

  const addNewUserHandler = (newUserName, newUserAge) => setUsers(prevUsersState => [{ name: newUserName, age: newUserAge, id: UID() }, ...prevUsersState]);

  const updateModal = (title, content, show = true) => setShowModal({ title, content, show });

  return (
    <div className="App">
      {showModal.show && <ErrorModal title={showModal.title} content={showModal.content} updateModal={updateModal} />}
      {/* <ErrorModal title={"Some modal title"} content={"This is some overlay modal content"}/> */}
      <Form onAddNewUser={addNewUserHandler} updateModal={updateModal} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
