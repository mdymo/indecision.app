import React from "react";
import './Log.css';
import '../SignIn/SignIn';
import SignIn from "../SignIn/SignIn";

class Log extends React.Component {

  showSignIn(event){
    event.preventDefaul();
    

    return(
      <SignIn />
    )
  }

  render(){
    return (
      <form className='login'>
        <div className="mb-3">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-mail' />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Hasło'/>
        </div>
        <button type="submit" className="btn btn-outline-dark" onClick={this.showSignIn}>Zaloguj</button>
      </form>
    );
  }
}

export default Log;