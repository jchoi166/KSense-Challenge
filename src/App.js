import { useCallback, useEffect, useState } from 'react';
import './App.css';

import PostMenu from './components/PostMenu';
import UserMenu from './components/UserMenu';


function App() {

  const [userList, setUserList] = useState([])
  const [postList, setPostList] = useState([])

  const getUsers = useCallback (async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
      setUserList(data)
    } 
    
    catch (err) {
      console.log(err)
    }
  }, [])

  const getPosts = async (user) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
      const data = await response.json()
      console.log(data)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  },[getUsers])

  
  return (
    <div>
      <UserMenu users={userList} getPosts={getPosts}/>
      <PostMenu />
    </div>
  );
}

export default App;
