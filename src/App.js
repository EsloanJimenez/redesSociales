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
  return (
    <section className='containerMajor'>
      <figcaption className='figMajor'>
        <img src={background} alt="rota" />
      </figcaption>

      <section className='containerSecondary'>
        <header>
          <nav>
            <button><FontAwesomeIcon icon={faEllipsis} /></button>
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
            <li><a href="#"><span><img src={intagram} /></span><span>Instagram</span></a></li>
            <li><a href="#"><span><img src={sitioWeb} /></span><span>Sitio Web</span></a></li>
            <li><a href="#"><span><img src={facebook} /></span><span>Facebook</span></a></li>
            <li><a href="#"><span><img src={youtube} /></span><span>YouTube</span></a></li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default App;
