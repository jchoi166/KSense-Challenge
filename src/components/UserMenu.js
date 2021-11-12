import UserTab from "./UserTab"


const User = (props) => {

   const getUserPosts = (user) => {
      props.getPosts(user)
      // console.log(user)
      // console.log('hello there')
   }
   
   const test = () => {
      console.log('hello there')
      
   }

   return (
      <div>
         {props.users.map(user => {
            return <UserTab username={user.name} key={user.id} onClick={getUserPosts.bind(user, user.id)}/>
         })}
      </div>
   )
}

export default User