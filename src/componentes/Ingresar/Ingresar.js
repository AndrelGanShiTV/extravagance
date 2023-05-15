
import logo from '../../img/exlogo.png'

function Ingresar (){
  return (
    <section class="vh-300" >
     <div class="container py-5 h-100">
       <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5" >
         <div class="card shadow-2-strong">
          <div class="card-body p-5 text-center">
          <img src={logo} alt="Logo" width="18%" class="d-inline-block align-text-center"/>
          <h3 class="mb-5">Ingresar</h3>
          <div class="form-outline mb-4">
                  <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                  <label class="form-label" for="typeEmailX-2">correo</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                  <label class="form-label" for="typePasswordX-2">Contraseña</label>
                </div>
                <div class="form-check d-flex justify-content-start mb-4">
                  <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label class="form-check-label" for="form1Example3"> Recuerdame Contraseña </label>
                </div>
                <button class="btn btn-primary btn-lg btn-block" type="submit">Ingresar</button>
                <hr class="my-4"></hr>
                <button class="btn btn-lg btn-block btn-primary"  type="submit">
                    <i class="fab fa-google me-2"  ></i><a class="nav-link active" href="#">Ingresar con google</a></button>
                    <button class="btn btn-lg btn-block btn-primary mb-2"
                  type="submit"><i class="fab fa-facebook-f me-2"></i>Ingresar con facebook</button>
       
          </div>
         </div>
        </div>
       </div>
     </div>

    </section>

  );  
       
}
export default Ingresar;
