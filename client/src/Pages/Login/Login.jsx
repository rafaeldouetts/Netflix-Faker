import './Login.css'
import logo from '../../assets/logo.png';
import globo from '../../assets/globo.png'
import { useNavigate } from 'react-router-dom';

export default  (props) =>{
  const navigate = useNavigate();

  function handleLogin(){
    navigate('/catalogo');
  }
  
  return <>
  <div id="Login">
  <div class="opactity_controller">
    <header>
      <img src={logo} alt="logo" />
    </header>

    <div class="content">
      <div>
        <h1>Entrar</h1>

        <form action="">
          <input type="text" placeholder="Email ou número de telefone" />
          <input type="password" placeholder="Senha" />
          <button type="submit" onClick={handleLogin}>Entrar</button>
          <div>
            <label htmlFor="remember-login">
              <input
                type="checkbox"
                defaultChecked
                name="remember"
                id="remember-login"
              />
              <span>Lembre-se de mim</span>
            </label>
            <a href="http://localhost:4200">Precisa de ajuda?</a>
          </div>
        </form>
        <h6>Novo por aqui? <span>Assine agora</span></h6>
        <span>
          Esta página é protegida pelo Google reCAPTCHA
          <br />
          para garantir que você não é um robô. <a href="">Saiba mais.</a>
        </span>
      </div>
    </div>

    <footer>
      <p>Dúvidas? Ligue <a>0000-000-0000</a></p>

      <ul>
        <li>Termos dos Cartões pré-pagos</li>
        <li>Termos de uso</li>
        <li>Declaração de privacidade</li>
      </ul>

      <div>
        <img src={globo} alt="globo" />
        <select name="select" id="select">
          <option value="a">Português</option>
          <option value="b">Inglês</option>
        </select>
      </div>
    </footer>
  </div>
</div>

  </>
}