import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
        {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} setShowLogin={setShowLogin}/>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} setShowLogin={setShowLogin} />
        </>
      )}
      </>
  );
}
export default Login;
