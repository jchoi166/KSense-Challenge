const UserTab = (props) => {
   return (
      <div onClick={props.onClick}>
         {props.username}
      </div>
   )
}

export default UserTab