import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'firebase/auth';
import  firebase from 'firebase/app'
import { useAuth, useSigninCheck } from 'reactfire'
import Login from './Login';
import Register from './Register'
import Todo from './Todo';


const Home = () => {
   

    const auth = useAuth();
    auth.languageCode = 'es';

    const login = async (formLogin) => {
        formLogin.preventDefault()
        try {
            let { emailLogin, passwordLogin } = formLogin.target.elements;
            await auth.signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
        } catch (error) {
            alert(error.message);
        }

    }

    const loginWithGoogle  = async () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        auth.languageCode = 'es';
        try {
            auth.signInWithRedirect(provider)
 
        } catch  (error){
            alert(error.message)
        }
        
       

    }


    const register = async (formRegister) => {
        formRegister.preventDefault()
        try {
            let { email, password } = formRegister.target.elements;
            await auth.createUserWithEmailAndPassword(email.value, password.value)
        } catch (error) {
            alert(error.message);
        }

    }

    const signOut = () => {
        auth.signOut()
    }

    const { status, data: signInCheckResult } = useSigninCheck();
    if (status === 'loading') return <div>Cargando...</div>

    return (
        <Router>
            <Switch >
                <Route exact path="/"  >
                    {signInCheckResult?.signedIn === true ?
                        <Todo signOut={signOut}  user = {signInCheckResult.user}/> :
                        <Login login={login}  loginWithGoogle={loginWithGoogle}/>}

                </Route>
                <Route exact path="/registro"  >
                    {signInCheckResult?.signedIn ?
                        <Todo signOut={signOut} user = {signInCheckResult.user}/> :
                        <Register register={register}  loginWithGoogle={loginWithGoogle}/>}

                </Route>
            </Switch>
        </Router>
    )
}

export default Home
