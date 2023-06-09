import React, { useState, useEffect } from 'react';
import logo from '../../img/exlogo.png'
import Axios from 'axios'
import { Link } from 'react-router-dom';

function Registrar() {
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [usuarioList, setUsuarioList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setUsuarioList(response.data);
    })
  }, [])

  const submitReview = () => {
    
    Axios.post(`http://localhost:3001/api/insert`, {
      correo: correo, 
      pass: pass
    });

    setUsuarioList([
      ...usuarioList, 
      {correo: correo, pass: pass}, 
    ]);
  };

  return (
    <section class="vh-300" >
      <div class="container py-5 h-300">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong">
              <div class="card-body p-5 text-center">
                <img src={logo} alt="Logo" width="18%" class="d-inline-block align-text-center" />
                <h3 class="mb-5">Registrarse</h3>
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >Correo</label>
                    <input onChange={(e) =>{
                      setCorreo(e.target.value)
                    }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                  </div>
                  <div class="mb-3">
                    <label for="inputPassword5" class="form-label">Contraseña</label>
                    <input onChange={(e) =>{
                      setPass(e.target.value)
                    }} type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"></input>
                    <div id="passwordHelpBlock" class="form-text">
                      Tu contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="inputPassword5" class="form-label">Verificar Contraseña</label>
                    <input onChange={(e) =>{
                      setPass2(e.target.value)
                    }} type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"></input>
                  </div>
                  <button onClick={submitReview} type="submit" class="btn btn-primary">Enviar</button>
                  <div style={{
                    color: "#539fa2",
                    margin: "5px"
                  }}>
                  {usuarioList.map((val) =>{
                    return <h6>Correo: {val.correo} | Contraseña: {val.contraseña}</h6>
                  })}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}
export default Registrar;