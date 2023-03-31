import logo from './logo.svg';
import './App.css';

import NavBar from './components/navBar'
import { useState } from 'react';





function App() {

  const [myImg, setMyImg] = useState(
    [
      {
        imgSrc: ''
      },
      {
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/800px-White_shark.jpg'
      },
      {
        imgSrc: "https://files.worldwildlife.org/wwfcmsprod/images/Brown_Bear_/hero_full/9kavvtzv2t_brownbear_hero.jpg"
      },
      {
        imgSrc: 'https://a-z-animals.com/media/2022/11/IMG-Boa-Constrictor-2-1024x602.jpg'
      },
      {
        imgSrc: 'https://upload.chatsdumonde.com/img_global/24-cousins-du-chat/_light-1297-le-tigre-du-bengale-morphologie-alimentation-mode-de-vie.jpg'
      },
      {
        imgSrc: 'https://actualitte.com/uploads/images/baloo1-1a3dd192-6fcb-4555-84aa-2e658887641e.jpg'
      }

    ]
  )

  const [incrementeur, setMyIncrementeur] = useState(0)

  return (
    <>
      <div className="globalBox">
      <figure className='blocImg'>
        <img className="imgEdit" src={myImg[incrementeur].imgSrc} alt="" />
    </figure>
    
      <NavBar image={myImg} imageSetter={setMyImg} incrementeur={incrementeur} setMyIncrementeur={setMyIncrementeur}/>
      </div>  
    </>
  );
}

export default App;
