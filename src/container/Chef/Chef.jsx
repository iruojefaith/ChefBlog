import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant"> What We Believe In</h1>

    <div className="app__chef-content">
    <div className="app__chef-content_quote">
      <img src={images.quote} alt="quote"/>
      <p className="p__opensans">Curabitur at euismod dui. Quisque maximus cursus ligula id vehicula.Suspendisse venenatis lacinia lacinia
      </p>
    </div>
    <p className="p__opensans">Nunc sit amet massa sed neque feugiat pulvinar sit amet quis quam. Quisque mauris sem, egestas at tempus id, feugiat sed sem. Curabitur sit amet interdum turpis</p>
    </div>

    <div className="app__chef-sign">
      <p>Kelvin Luo</p>
      <p className="p__opensans">Chef & Founder</p>
      <img src={images.sign} alt="sign" />
    </div>
    </div>
  </div>
);

export default Chef;
