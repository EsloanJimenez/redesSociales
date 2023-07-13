import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import './css/App.css';

import background from './images/banner/logo_nuevo_blanco.png'
import whatsApp from './images/icon/WhatsApp.png'
import intagram from './images/icon/instagram.png'
import sitioWeb from './images/icon/web-domain.png';
import facebook from './images/icon/facebook.png';
import youtube from './images/icon/youtube.png'

function App() {
  const compartir = () => {
    alert('Esta funcion todavia no esta disponible.');
  }

  return (
    <section className='containerMajor'>
      <figcaption className='figMajor'>
        <img src={background} alt="rota" />
      </figcaption>

      <section className='containerSecondary'>
        <header>
          <nav>
            <button onClick={compartir} className='button'><FontAwesomeIcon icon={faEllipsis} /></button>
          </nav>
        </header>

        <article className='profile'>
          <figcaption className='figSecondary'>
            <img src={background} alt="rota" />
          </figcaption>

          <h2>@ejpservice</h2>
        </article>

        <article className='social'>
          <ul>
            <li><a href="https://api.whatsapp.com/send?phone=18493308701" target='_blank'><span><img src={whatsApp} /></span><span>WhatsApp</span></a></li>
            <li><a href="https://www.instagram.com/ejpservice/"><span><img src={intagram} /></span><span>Instagram</span></a></li>
            <li><a href="https://ejpservice.netlify.app/"><span><img src={sitioWeb} /></span><span>Sitio Web</span></a></li>
            <li><a href="https://www.facebook.com/CamarerosEJP"><span><img src={facebook} /></span><span>Facebook</span></a></li>
            <li><a href="https://www.youtube.com/@ejpservice8761"><span><img src={youtube} /></span><span>YouTube</span></a></li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default App;
// https://api.whatsapp.com/send/?text=Check+out+this+Linktree%21+-+https%3A%2F%2Flinktr.ee%2Fejpservice%3Futm_source%3Dlinktree_profile_share&type=custom_url&app_absent=0
// https://api.whatsapp.com/send/?text=Check+out+this+Linktree%21+-+https%3A%2F%2Flinktr.ee%2Fejpservice%3Futm_source%3Dlinktree_profile_share&type=custom_url&app_absent=0