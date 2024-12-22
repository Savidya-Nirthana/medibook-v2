import { useState } from "react";
import { register } from "../services/userAuthService";

const SignUp = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [regNum, setRegNum]  = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

  const regHandling = async() => {
    const data = await register(firstName, lastName, regNum, email, password);
  };
  return (
    <>
        <div>Sign up for medibook</div>
      <form onSubmit={regHandling}>
        <div>
          first name:
          <input type="text" placeholder="firstname" onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div>
          last name:
          <input type="text" placeholder="lastname" onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div>
          Registration number:
          <input type="text" placeholder="register number" onChange={(e) => setRegNum(e.target.value)}/>
        </div>
        <div>
          email:
          <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          password:
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default SignUp;
