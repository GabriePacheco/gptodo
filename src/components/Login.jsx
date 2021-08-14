import React, { useState } from 'react'
import  {Link} from 'react-router-dom'

const gp = "{GP}"

const Login = ({ login , loginWithGoogle}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');



    return (
        <section className="alto d-flex justify-content-center align-items-center">
            <div className="container">
                <form className="col-12" autoComplete="off" onSubmit = {(e) => login(e)}>

                    <div className="mb-5">
                        <h4 className="display-2 text-primary"> <i className="bi bi-emoji-sunglasses-fill"></i><strong> {gp} Pendientes</strong></h4>
                        <h4>Hola, Buen día</h4>
                        <p>Inicia sesión para Continuar</p>
                    </div>


                    <div className="form-floating mb-3">
                        <input
                            value={userName}
                            onChange={(evento) => { setUserName(evento.target.value) }}
                            type="email"
                            required
                            className="form-control" id="emailLogin"
                            placeholder="name@example.com" />
                        <label htmlFor="emailLogin">Correo Electronico</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            value={password}
                            onChange={(evento) => { setPassword(evento.target.value) }}
                            required
                            type="password" className="form-control" id="passwordLogin" autoComplete="of" />
                        <label htmlFor="passwordLogin">Contraseña</label>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-outline-primary col-12" >Iniciar Sesión </button>
                    </div>
                    <div className="my-1 text-center">
                        o
                    </div>
                    <div className="mb-3">
                        <button type="button"
                            onClick = {()=> loginWithGoogle() }
                            className="btn btn-primary col-12 d-flex justify-content-around" >
                            <i className="bi bi-google"></i><span>Inicia seión con Google </span> </button>
                    </div>
                
                </form>
                 <div className= "text-center" > Si no tieness una cuenta <Link  to = '/registro'> Registrate aquí  </Link></div>   
            </div>

        </section>
    )
}

export default Login
