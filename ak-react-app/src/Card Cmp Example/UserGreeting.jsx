import propTypes from "prop-types";

function userGreeting(props){
    const welcomeMssg = <h2 className = "welcome-mssg">Welcome {props.username}</h2>;
    const loginPrompt = <h2 className = "loggin-prompt">Try Logging in</h2>
    return(props.isloggedin ? welcomeMssg:loginPrompt);
}
  userGreeting.propTypes = {
    isloggedin:propTypes.bool,
    username:propTypes.string
  }

  userGreeting.defaultProps = {
    isloggedin:false,
    username:'Someone',
  }
export default userGreeting
