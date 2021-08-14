import React, { useState } from 'react'
import 'firebase/firestore'
import { useFirestore, useFirestoreDocData } from 'reactfire'
import moment from 'moment'


const gp = '{GP}'


/*const tareas = [
   { id: "1", detalle: "Hacer moviles", fetcha: new Date(), status: false },
    { id: "2", detalle: "crear Apk", fetcha: new Date(), status: false }

]*/
const Nav = ({ singOut }) => {


    return <nav className="navbar navbar-dark bg-primary fixed-top mb-5">
        <div className="container">
            <span className="navbar-brand mb-0 h1"><i className="bi bi-emoji-sunglasses-fill"></i>{gp} Pendientes</span>
            <span className="navbar-brand mb-0  d-flex justify-content-end">
                <a className="nav-link text-white"
                    onClick={() => singOut()}
                >
                    Salir <i className="bi bi-power"></i></a>
            </span>
        </div>
    </nav>


}

const Todo = ({ signOut,user }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const { nuevaTarea } = e.target.elements
        let mt = moment()
        let nuevas = [...tareas,
        { id: mt.valueOf(), detalle: nuevaTarea.value, status: false, fecha: new Date() }]
        nuevaTarea.value = "";
        firestore.set({ tareas: nuevas })

    }

    
    const firestore = useFirestore().collection('tasks').doc(user.uid)
    const { status, data } = useFirestoreDocData(firestore);


    const tareas = data ? data.tareas : []

    const clean = (id ) => {
        let tas = tareas.filter(tar => tar.id !== id )
        firestore.set({ tareas:tas })
    }

    const toggle = (id ) => {
        let tas = tareas.map(tar => {
            if (tar.id == id ){
                
                return {...tar, status: !tar.status}
            }else {
                return tar
            }
        })
        firestore.set({ tareas:tas })
    }



    return (
        <>
            <Nav singOut={signOut} />
            <section className="mt-5 pt-5">
                <div className="container ">
                    <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}  >
                        <div className="form-floating mb-3">
                            <input
                                name="nuevaTarea"
                                autoComplete='off'
                                type="text"
                                className="form-control" id="task"
                                placeholder="Tarea"
                            />
                            <label htmlFor="task"> + Agregar tarea</label>
                        </div>
                    </form>
                    <div>
                        <ul className="list-group">
                            {tareas?.map(ta =>

                                <li key={ta.id} className="list-group-item d-flex justify-content-between">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" onClick={()=>toggle (ta.id)} id={ta.id} checked={ta.status} />
                                        <label className={`form-check-label ` }  htmlFor={ta.id}>
                                           <span className= {ta.status ? 'text-decoration-line-through':''}> {ta.detalle}</span>
                                        </label>
                                    </div>
                                    <div>
                                        <a onClick = {() => clean(ta.id)}> <i className="bi bi-trash"></i></a>                                        
                                    </div>

                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </>


    )
}

export default Todo
