import React, { useState } from "react";
import {auth} from './Firebase'
function Login() {
  const [type, setType] = useState(false);
  const [name,setName]=useState("");
  const [password,setPassword]=useState();
  const [email,setEmail]=useState();
  function change1()
  {
    setType(false);
  }
  function change2()
  {
    setType(true);
  }
  async function login()
  {
    if(email && password)
    {
    await auth.signInWithEmailAndPassword(email,password).then((value)=>{
        console.log(value)
    }).catch((error)=>{
      console.log(error)
    })
  }
  else
  {
    alert("Something is missing please check")
  }
  }
  async function signup()
  {
    if(email && password && name)
    {
    
    await auth.createUserWithEmailAndPassword(email,password).then((value)=>{
        console.log("logged by",name);
    }).catch((error)=>{
      console.log("error");
    })
    var user=auth.currentUser;
    user.updateProfile({
        displayName:name
    }).then((e)=>{
        console.log(auth.displayName);
    }).catch((e)=>{

    })
  }
  else
  {
    alert("You should fill all the details")
  }

  }
  return (
      <div>
    <div className="container my-4" style={{marginLeft:400}}>
      <form onSubmit={(e)=>{
        e.preventDefault();
        type?signup():login()
      }}>
        {type ?(<div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            onChange={(e)=>setName(e.target.value)}
            style={{maxWidth:500}}
          />
        </div>):(<span></span>)
        }
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
            style={{maxWidth:500}}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setPassword((e.target.value))}
            style={{maxWidth:500}}
          />
        </div>
        <button type="submit" onClick={change1} className="btn btn-primary btn-sm" style={{margin:10}}>
          login
        </button>
        <button type="submit" onClick={change2} className="btn btn-primary btn-sm">
          Signup
        </button>
      </form>
    </div>
    </div>
  );
}

export default Login;
