import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  const [cohort, setCohort] = useState([])
  useEffect(() => {
    fetch("/cohorts")
      .then((r) => r.json())
      .then(setCohort);
  }, []);
 
  return (
    <>
        {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} setShowLogin={setShowLogin}/>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} cohort ={cohort}setShowLogin={setShowLogin} />
        </>
      )}
      </>
  );
}
export default Login;
