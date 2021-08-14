import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const gp = "{GP}"

const Register = ({ register, loginWithGoogle }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className="alto d-flex justify-content-center align-items-center">
            <div className="container">
                <form className="col-12" autoComplete="off" onSubmit={(e) => register(e)}>

                    <div className="mb-5">
                        <h4 className="display-2 text-primary"> <i className="bi bi-emoji-sunglasses-fill"></i><strong> {gp} Pendientes</strong></h4>
                        <h4>Registro</h4>
                       
                    </div>

                    <div className="mb-2">
                        <button type="button"
                            onClick = {()=> loginWithGoogle()}
                            className="btn btn-primary col-12 d-flex justify-content-around" >
                            <i className="bi bi-google"></i><span>Registrate con Google </span> </button>
                    </div>

                    <div className="my-2 text-center ">
                        o
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            value={userName}
                            onChange={(evento) => { setUserName(evento.target.value) }}
                            type="email"
                            required
                            className="form-control" id="email"
                            placeholder="name@example.com" />
                        <label htmlFor="email">Correo Electronico</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            value={password}
                            onChange={(evento) => { setPassword(evento.target.value) }}
                            required
                            type="password" className="form-control" id="password" autoComplete="of" />
                        <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-outline-primary col-12" >Registrate </button>
                    </div>
                    

                </form>
                <div className="text-center" >Ya tines una cuenta ?<Link to='/'> Ingresa Aqui  </Link></div>
            </div>

        </section>
    )
}

export default Register
