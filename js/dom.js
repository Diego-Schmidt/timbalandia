function paginaIndexLogged(){
    document.getElementById("cuerpo").innerHTML = `<header class="fade-in">
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto sm-auto text-white text-decoration-none">
            <img src="./assets/logo.png" width="60px" alt=""><h1 id="titulo" class="text-warning sm-fs-3 ms-4">Timbalandia!</h1>
          </a>
  
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="index.html" class="nav-link text-warning" onclick="paginaIndexLogged();return false;">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"/></svg>
                Inicio
              </a>
            </li>
            <li id="linkPanel">
              <a href="./pages/cuenta.html" class="nav-link ttext-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
                Panel
              </a>
            </li>
           <!-- codigo reservado para versiones futuras -->
            <!-- <li>
              <a href="./pages/cuenta.html" class="nav-link ttext-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
                Panel
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"/></svg>
                Crypto
              </a>
            </li> -->
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Juegos
              </a>
            </li>
            <li>
              <a href="./pages/loteria.html" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Lotería
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Contacto
              </a>
            </li>
            <!-- <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg>
                Acerca de
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2">
      <div class="container d-flex flex-wrap justify-content-center">
        <form id="formuLogin" class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <div id="saludo" class="bg-warning"><h6 class="text-default text-center border border-3 border-danger rounded">identifiquese para jugar</h6></div>
          <div id="avisoLoginPls" class="bg-warning"></div>
          <!-- Buscador desactivado porque no tiene función real por el momento -->
          <!-- <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search"> -->
        </form>
  
        <div class="text-end">
          <div id="ingresarsalir"><button id="botonIngresar" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirLogin()" >Ingresar</button></div>
          
        </div>
        <div class="text-end">
          <div id="registrarse"><button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2 d-none" onclick="abrirRegistro()" >Registrarse</button></div>
        </div>
    </div> 
    
  
  </header>
    
    <div class="container my-0">
      <main id="principal">
        <div class="form-popup rounded-3" id="miRegistro">
          <div class="login text-white">
            <form name='form-login'>
        
                <h1>REGISTRO</h1>
        
                <label for="name">Email</label>
                <input type="email" id="name" placeholder="Usuario" required>
        
                <label for="pw">Contraseña</label>
                <input type="password" id= "pw" placeholder="Password" required>
                
                <!-- Desactivado para usar en futuras versiones -->
                
                <!-- <div class="flex-column"><label for="avatar">Tu foto</label>
                <input type="file" id="avatar" name="foto" accept=".jpg,.png,.webp,.gif">>
                </div> -->
        
                <ul class="helper-text">
                    <!-- <li class="length">Al menos 8 carácteres de largo.</li>
                    <li class="lowercase">Debe contener una minúscula.</li>
                    <li class="uppercase">Tiene que contener una mayúscula.</li>
                    <li class="special">Debe contener un carácer especial como *.</li> -->
                </ul>
  
                <input class="text-dark" id="rgstr_btn" type="button" value="Registrarse" onclick="store()">
                <button type="button" class="btn cancel text-warning" onclick="cerrarRegistro()">Cerrar</button>
            </form>
        </div></div>
        <div class="form-popup" id="miLogin">
          <div id="loginform-html" class="login text-white rounded-3" style="--bs-bg-opacity: .9;">
            <form name='form-login'>
        
                <h1>Ingresar</h1>
        
                <label for="userName">Email</label>
                <input type="email" id="userName" placeholder="Email" required>
              
                <label for="userPw">Password</label>
                <input type="password" id= "userPw" placeholder="Contraseña" required>
        
                <!-- <div id="remember">
                    <input type="checkbox" value="lsRememberMe" id="rememberMe"
                           style="display: inline-block;">
                    <label>Remember me</label>
                </div> -->
        
                <input class="text-dark" id= "login_btn" type="button" value="Login" onclick="check()">
                <button type="button" class="btn cancel text-warning" onclick="cerrarLogin()">Cerrar</button>
            </form>
        </div></div>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm bg-success pack100" style="--bs-bg-opacity: .9;">
              <div class="card-header py-3">
                <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal text-white">100 TC</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title text-white">100 AR$</h1>
                <ul class="list-unstyled mt-3 mb-4 text-white">
                  <li>100 Timbacoins</li>
                  <li>Acceso a todos los juegos liga Trebol</li>
                  <li>1 número de regalo para la lotería</li>
                  <li>10% de chance de ganar un premio extra en cada sorteo</li>
                </ul>
                <div id="comprar100"><button id="100TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(100)">Comprar</button></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm bg-warning pack500" style="--bs-bg-opacity: .9;">
              <div class="card-header py-3">
                <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal">500 TC</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">500 AR$</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>500 Timbacoins</li>
                  <li>Acceso a todos los juegos liga Oro</li>
                  <li>2 números de regalo para la lotería</li>
                  <li>25% de chances de ganar un premio extra en cada sorteo</li>
                </ul>
                <div id="comprar500"><button id="500TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(500)">Comprar</button></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm bg-danger pack1000" style="--bs-bg-opacity: .9;">
              <div class="card-header py-3 text-white" style="--bs-bg-opacity: .9;">
                <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal">1000 TC</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">1000 AR$</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>1000 Timbacoins</li>
                  <li>Acceso atodos los juegos liga Rubí</li>
                  <li>3 números de regalo para la lotería</li>
                  <li>30% de posibilidades de ganar un premio extra en cada sorteo</li>
                </ul>
                <div id="comprar1000"><button id="1000TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="comprar(1000)">Comprar</button></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    
    <!-- Inicio del footer -->
  
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-around align-content-center align-items-center py-3 my-4 bg-dark text-warning fade-in">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
        </a>
        <span class="">&copy; 2022 Timbalandia!</span>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex text-center text-warning">
        <i class="fi-snsuxl-facebook me-2" style="color: rgb(255, 208, 0);"></i>
        <i class="fi-xnsuxl-twitter-solid me-2" style="color: rgb(255, 208, 0);"></i>
        <i class="fi-xnsuxl-instagram" style="color: rgb(255, 208, 0);"></i>
      </ul>
    </footer>
  </div>
      <script src="./js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`;
    
  }

function paginaIndexNoLogged(){
    document.getElementById("cuerpo").innerHTML = `<header class="fade-in">
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto sm-auto text-white text-decoration-none">
            <img src="./assets/logo.png" width="60px" alt=""><h1 id="titulo" class="text-warning sm-fs-3 ms-4">Timbalandia!</h1>
          </a>
  
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="index.html" class="nav-link text-warning" onclick="paginaIndexNoLogged();return false;">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"/></svg>
                Inicio
              </a>
            </li>
            <li id="linkPanel">
              <a href="./pages/cuenta.html" class="nav-link ttext-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
                Panel
              </a>
            </li>
           <!-- codigo reservado para versiones futuras -->
            <!-- <li>
              <a href="./pages/cuenta.html" class="nav-link ttext-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
                Panel
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"/></svg>
                Crypto
              </a>
            </li> -->
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Juegos
              </a>
            </li>
            <li>
              <a href="./pages/loteria.html" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Lotería
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Contacto
              </a>
            </li>
            <!-- <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg>
                Acerca de
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2">
      <div class="container d-flex flex-wrap justify-content-center">
        <form id="formuLogin" class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <div id="saludo" class="bg-warning"><h6 class="text-default text-center border border-3 border-danger rounded">identifiquese para jugar</h6></div>
          <div id="avisoLoginPls" class="bg-warning"></div>
          <!-- Buscador desactivado porque no tiene función real por el momento -->
          <!-- <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search"> -->
        </form>
  
        <div class="text-end">
          <div id="ingresarsalir"><button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="abrirLogin()" >Ingresar</button></div>
          
        </div>
        <div class="text-end">
          <div id="registrarse"><button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2" onclick="abrirRegistro()" >Registrarse</button></div>
        </div>
    </div> 
    
  
  </header>
    
    <div class="container my-0">
      <main id="principal">
        <div class="form-popup rounded-3" id="miRegistro">
          <div class="login text-white">
            <form name='form-login'>
        
                <h1>REGISTRO</h1>
        
                <label for="name">Email</label>
                <input type="email" id="name" placeholder="Usuario" required>
        
                <label for="pw">Contraseña</label>
                <input type="password" id= "pw" placeholder="Password" required>
                
                <!-- Desactivado para usar en futuras versiones -->
                
                <!-- <div class="flex-column"><label for="avatar">Tu foto</label>
                <input type="file" id="avatar" name="foto" accept=".jpg,.png,.webp,.gif">>
                </div> -->
        
                <ul class="helper-text">
                    <!-- <li class="length">Al menos 8 carácteres de largo.</li>
                    <li class="lowercase">Debe contener una minúscula.</li>
                    <li class="uppercase">Tiene que contener una mayúscula.</li>
                    <li class="special">Debe contener un carácer especial como *.</li> -->
                </ul>
  
                <input class="text-dark" id="rgstr_btn" type="button" value="Registrarse" onclick="store()">
                <button type="button" class="btn cancel text-warning" onclick="cerrarRegistro()">Cerrar</button>
            </form>
        </div></div>
        <div class="form-popup" id="miLogin">
          <div id="loginform-html" class="login text-white rounded-3" style="--bs-bg-opacity: .9;">
            <form name='form-login'>
        
                <h1>Ingresar</h1>
        
                <label for="userName">Email</label>
                <input type="email" id="userName" placeholder="Email" required>
              
                <label for="userPw">Password</label>
                <input type="password" id= "userPw" placeholder="Contraseña" required>
        
                <!-- <div id="remember">
                    <input type="checkbox" value="lsRememberMe" id="rememberMe"
                           style="display: inline-block;">
                    <label>Remember me</label>
                </div> -->
        
                <input class="text-dark" id= "login_btn" type="button" value="Login" onclick="check()">
                <button type="button" class="btn cancel text-warning" onclick="cerrarLogin()">Cerrar</button>
            </form>
        </div></div>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm bg-success pack100" style="--bs-bg-opacity: .9;">
              <div class="card-header py-3">
                <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal text-white">100 TC</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title text-white">100 AR$</h1>
                <ul class="list-unstyled mt-3 mb-4 text-white">
                  <li>100 Timbacoins</li>
                  <li>Acceso a todos los juegos liga Trebol</li>
                  <li>1 número de regalo para la lotería</li>
                  <li>10% de chance de ganar un premio extra en cada sorteo</li>
                </ul>
                <div id="comprar100"><button id="100TC" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm bg-warning pack500" style="--bs-bg-opacity: .9;">
              <div class="card-header py-3">
                <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal">500 TC</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">500 AR$</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>500 Timbacoins</li>
                  <li>Acceso a todos los juegos liga Oro</li>
                  <li>2 números de regalo para la lotería</li>
                  <li>25% de chances de ganar un premio extra en cada sorteo</li>
                </ul>
                <div id="comprar500"><button id="500TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm bg-danger pack1000" style="--bs-bg-opacity: .9;">
              <div class="card-header py-3 text-white" style="--bs-bg-opacity: .9;">
                <img src="./assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal">1000 TC</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">1000 AR$</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>1000 Timbacoins</li>
                  <li>Acceso atodos los juegos liga Rubí</li>
                  <li>3 números de regalo para la lotería</li>
                  <li>30% de posibilidades de ganar un premio extra en cada sorteo</li>
                </ul>
                <div id="comprar1000"><button  id="1000TC" type="button" class="w-100 btn btn-lg btn-primary" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    
    <!-- Inicio del footer -->
  
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-around align-content-center align-items-center py-3 my-4 bg-dark text-warning fade-in">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
        </a>
        <span class="">&copy; 2022 Timbalandia!</span>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex text-center text-warning">
        <i class="fi-snsuxl-facebook me-2" style="color: rgb(255, 208, 0);"></i>
        <i class="fi-xnsuxl-twitter-solid me-2" style="color: rgb(255, 208, 0);"></i>
        <i class="fi-xnsuxl-instagram" style="color: rgb(255, 208, 0);"></i>
      </ul>
    </footer>
  </div>
      <script src="./js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`;
    
  }

  function paginaLoteriaNoLogged(){
    document.getElementById("cuerpo").innerHTML = `<header class="fade-in">
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto sm-auto text-white text-decoration-none">
            <img src="./assets/logo.png" width="60px" alt=""><h1 id="titulo" class="text-warning sm-fs-3 ms-4">Timbalandia!</h1>
          </a>
  
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="index.html" class="nav-link text-warning" onclick="paginaIndexNoLogged();return false;" >
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"/></svg>
                Inicio
              </a>
            </li>
            <li id="linkPanel">
              <a href="cuenta.html" class="nav-link ttext-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
                Panel
              </a>
            </li>
           <!-- codigo reservado para versiones futuras -->
            <!-- <li>
              <a href="./pages/cuenta.html" class="nav-link ttext-warning" onclick="paginaCuentaNoLogged();return false;">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"/></svg>
                Panel
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"/></svg>
                Crypto
              </a>
            </li> -->
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Juegos
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Lotería
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"/></svg>
                Contacto
              </a>
            </li>
            <!-- <li>
              <a href="#" class="nav-link text-warning">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#people-circle"/></svg>
                Acerca de
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2">
      <div class="container d-flex flex-wrap justify-content-center">
        <form id="formuLogin" class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <div id="saludo" class="bg-warning"><h6 class="text-default text-center border border-3 border-danger rounded">identifiquese para jugar</h6></div>
          <div id="avisoLoginPls" class="bg-warning"></div>
          <!-- Buscador desactivado porque no tiene función real por el momento -->
          <!-- <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search"> -->
        </form>
  
        <div class="text-end">
          <div id="ingresarsalir"><button id="botonIngresar" type="button" class="btn btn-light text-dark me-2" onclick="abrirLogin()" >Ingresar</button></div>
          
        </div>
        <div class="text-end">
          <div id="registrarse"><button id="botonRegistrarse" type="button" class="btn btn-light text-dark me-2" onclick="abrirRegistro()" >Registrarse</button></div>
        </div>
    </div> 
    
  
  </header>
    
    <div class="container my-0">
      <main id="principal">
        <div class="form-popup" id="miRegistro">
          <div class="login text-white">
            <form name='form-login'>
        
                <h1>REGISTRO</h1>
        
                <label for="name">Email</label>
                <input type="email" id="name" placeholder="Usuario" required>
        
                <label for="pw">Contraseña</label>
                <input type="password"
                       id= "pw"
                       placeholder="Password" required>
        
                <ul class="helper-text">
                    <!-- <li class="length">Al menos 8 carácteres de largo.</li>
                    <li class="lowercase">Debe contener una minúscula.</li>
                    <li class="uppercase">Tiene que contener una mayúscula.</li>
                    <li class="special">Debe contener un carácer especial como *.</li> -->
                </ul>
                <input class="text-dark" id="rgstr_btn" type="submit" value="Registrarse" onclick="store()">
                <button type="button" class="btn cancel text-warning" onclick="cerrarRegistro()">Cerrar</button>
            </form>
        </div></div>
        <div class="form-popup" id="miLogin">
          <div class="login text-white">
            <form name='form-login'>
        
                <h1>Ingresar</h1>
        
                <label for="userName">Email</label>
                <input type="email" id="userName" placeholder="Email" required>
              
                <label for="userPw">Password</label>
                <input type="password" id= "userPw" placeholder="Contraseña" required>
        
                <!-- <div id="remember">
                    <input type="checkbox" value="lsRememberMe" id="rememberMe"
                           style="display: inline-block;">
                    <label>Remember me</label>
                </div> -->
        
                <input class="text-dark" id= "login_btn" type="submit" value="Login" onclick="check()">
                <button type="button" class="btn cancel text-warning" onclick="cerrarLogin()">Cerrar</button>
            </form>
        </div></div>
          <div class="container py-1 escala">
            <div class="pb-3 mb-4">
                <span class="fs-4 bg-warning">Lotería de Timbalandia!</span>
            </div>
        
            <div class="p-5 mb-4 bg-light rounded-3">
              <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Ganate la olla de oro del duende Timba!</h1>
                <img class="img-fluid float-end" src="../assets/orodelduende.png" width="50%"/>
                <div class="col-md-8 fs-4">Todos los viernes en Timbalandia! hay sorteo, comprá tus números para entrar en el sorteo de 20.000 TC$!, no te quedes afuera, ¡comprá tus números "Lotis" ya!.</div>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm bg-success pack100">
                  <div class="card-header py-3">
                    <img src="../assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal text-white">1 Loti</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title text-white">100 TC$</h1>
                    <!-- <ul class="list-unstyled mt-3 mb-4 text-white">
                      <li>100 Timbacoins</li>
                      <li>Acceso a todos los juegos liga Trebol</li>
                      <li>1 número de regalo para la lotería</li>
                      <li>10% de chance de ganar un premio extra en cada sorteo</li>
                    </ul> -->
                    <div id="comprar1"><button id="1N" type="button" class="w-100 btn btn-lg btn-outline-primary bg-warning" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm bg-warning pack500">
                  <div class="card-header py-3">
                    <img src="../assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal">4 Lotis</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">400 TC$</h1>
                    <!-- <ul class="list-unstyled mt-3 mb-4">
                      <li>500 Timbacoins</li>
                      <li>Acceso a todos los juegos liga Oro</li>
                      <li>2 números de regalo para la lotería</li>
                      <li>25% de chances de ganar un premio extra en cada sorteo</li>
                    </ul> -->
                    <div id="comprar4"><button id="4N" type="button" class="w-100 btn btn-lg btn-primary" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary bg-danger pack1000">
                  <div class="card-header py-3 text-white bg-primary border-primary">
                    <img src="../assets/tc.gif" width="120px"/><h4 class="my-0 fw-normal">8 Lotis</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">800 TC$</h1>
                    <!-- <ul class="list-unstyled mt-3 mb-4">
                      <li>1000 Timbacoins</li>
                      <li>Acceso atodos los juegos liga Rubí</li>
                      <li>3 números de regalo para la lotería</li>
                      <li>30% de posibilidades de ganar un premio extra en cada sorteo</li>
                    </ul> -->
                    <div id="comprar8"><button  id="8N" type="button" class="w-100 btn btn-lg btn-primary" onclick="doLoginPls()">Identifíquese para Comprar</button></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row align-items-md-stretch">
              <div class="col-md-6">
                <div class="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>Ganate una bocha de monedas! ah re loco!</h2>
                  <p>Ganate una bocha de monedas para gastarlas en los jueguitos del sitio o para volver a comprar números de la timba, re locoooooo.</p>
                  <button class="btn btn-outline-light" type="button">Comprar más</button>
                </div>
              </div>
              <div class="col-md-6">
                <div class="h-100 p-5 bg-light border rounded-3">
                  <h2>El amigo de un amigo se lo ganó</h2>
                  <p>Cientos de testimonios dan fe de la felicidad que te da cuando te ganás el pote de oro del duende Timba!.</p>
                  <button class="btn btn-outline-secondary" type="button">Ya fue te doy toda mi guita</button>
                </div>
              </div>
            </div>
        </div>
        </main>
        
  
    
    <!-- Inicio del footer -->
  
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-around align-content-center align-items-center py-3 my-4 bg-dark text-warning fade-in">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
        </a>
        <span class="">&copy; 2022 Timbalandia!</span>
      </div>
  
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex text-center text-warning">
        <i class="fi-snsuxl-facebook me-2" style="color: rgb(255, 208, 0);"></i>
        <i class="fi-xnsuxl-twitter-solid me-2" style="color: rgb(255, 208, 0);"></i>
        <i class="fi-xnsuxl-instagram" style="color: rgb(255, 208, 0);"></i>
      </ul>
    </footer>
  </div>
      <script src="../js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`;
  }