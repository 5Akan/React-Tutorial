function userGreeting(props){
    return(props.isloggedin ? <h2>Welcome {props.username}</h2> : <h2>Try Loginng in</h2>);
}
  
export default userGreeting