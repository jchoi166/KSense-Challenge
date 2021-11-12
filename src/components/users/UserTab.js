import classes from "./UserTab.module.css"

const UserTab = (props) => {
   return (
      <div className={classes.userTab} onClick={props.onClick}>
         {props.username}
      </div>
   )
}

export default UserTab