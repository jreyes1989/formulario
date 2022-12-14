
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'



function App() {

  const [closeForm, setCloseForm] = useState(true)

  const {users,getAllUsers,createNewUser, deleteUserById, updateUserById} = useCrud()
  const [updateInfo, setUpdateInfo] = useState()


  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <div className='move__end'>
        <h1>Users</h1>
        <button onClick={() => setCloseForm(false)}  className='App__btn'>Open Form</button>
      </div>
      <div className= {`form-container ${closeForm && "close__form"}`}> 
      <FormUser
      createNewUser={createNewUser} 
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setCloseForm={setCloseForm}
      />
      </div>

      <div className='user-container'>
        {
          users?.map(user => ( 
            <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            />
            )) 
        }

      </div>
    </div>
  )
}

export default App
