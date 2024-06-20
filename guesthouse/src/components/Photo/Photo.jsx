import React from 'react';
import Out from '../../assets/out.jpg'; // Importing the image
import AyoDhya from '../../assets/ayodhya.webp'; // Importing the image
import Large from '../../assets/large.jpg'; // Importing the image
import Palash from '../../assets/palash.webp'; // Importing the image
import Small from '../../assets/small.jpg'; // Importing the image
import Baranti from '../../assets/baranti.webp'; // Importing the image
import Recep from '../../assets/recep.jpg'; // Importing the image
import Flower from '../../assets/flower.jpg'; // Importing the image
import Room from '../../assets/room1.jpg'; // Importing the image
import MithonDam from '../../assets/mithonDam.webp'; // Importing the image

const Photo = () => {
  return (
    <div className="container11 grid grid-cols-1 md:grid-cols-4 ">
      <div className="box11 a">
        <img className="h-auto max-w-full rounded-lg " src={Out} alt="Out" />
      </div>
      <div className="box11 b">
        <img className="h-auto max-w-full rounded-lg " src={AyoDhya} alt="AyoDhya" />
      </div>
      <div className="box11 c">
        <img className="h-auto max-w-full rounded-lg " src={Large} alt="Large" />
      </div>
      <div className="box11 d">
        <img className="h-auto max-w-full rounded-lg" src={Palash} alt="Palash" />
      </div>
      <div className="box11 e">
        <img className="h-auto max-w-full rounded-lg " src={Small} alt="Small" />
      </div>
      <div className="box11 f">
        <img className="h-auto max-w-full rounded-lg " src={Baranti} alt="Baranti" />
      </div>
      <div className="box11 g">
        <img className="h-auto max-w-full rounded-lg " src={Recep} alt="Recep" />
      </div>
      <div className="box11 h">
        <img className="h-auto max-w-full rounded-lg " src={Flower} alt="Flower" />
      </div>
      <div className="box11 j">
        <img className="h-auto max-w-full rounded-lg " src={Room} alt="Room" />
      </div>
      <div className="box11 i">
        <img className="h-auto max-w-full rounded-lg" src={MithonDam} alt="MithonDam" />
      </div>
    </div>
  );
};

export default Photo;
