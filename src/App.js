import { useCallback, useEffect, useState } from 'react';
import './App.css';

import PostMenu from './components/posts/PostMenu';
import UserMenu from './components/users/UserMenu';


function App() {

  const [userList, setUserList] = useState([])
  const [postList, setPostList] = useState([])

  const getUsers = useCallback (async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      // console.log(data)
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
      setPostList(data)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  },[getUsers])

  
  return (
    <div className="app">
      <UserMenu users={userList} getPosts={getPosts}/>
      {/* {postList ?? } */}
      <PostMenu posts={postList}/>
    </div>
  );
}

export default App;
