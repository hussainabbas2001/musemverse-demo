import './Home.css';
import 'remixicon/fonts/remixicon.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';



const Home = () => {
  const cardInfo = [
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/200/LMG0034.png',
      title: 'Sambara',
      price: '1200Ad',
      description:
        'Sambara is a Buddhist Tantric God and is the King of knowledge having ',
    },
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/151/GAG017.png',
      title: 'Ushnishavijaya',
      price: '1000Ad',
      description:
        'The eight-armed Indian goddess Ushnishavijaya is one of three deities ',
    },
   
    
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/201/LMG0035.png',
      title: 'King Narsimha',
      price: '1200Ad',
      description:
        'The Eastern Ganga dynasty reigned from Kalinga and their rule consiste...',
    },
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/133/HGB0007.png',
      title: 'Durga',
      price: '1300CE',
      description:
        'Sambara is a Buddhist Tantric God and is the King of knowledge having',
    },
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/133/HGB0007.png',
      title: 'Durga',
      price: '1300CE',
      description:
        'Sambara is a Buddhist Tantric God and is the King of knowledge having',
    },
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/202/LMG0036.png',
      title: 'Leogryph',
      price: '1200Ad',
      description:
        'It is a mythical creature seen in many South Indian temples, often scu',
    },
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/215/LMG0049.png',
      title: 'Saraswati',
      price: '1200Ad',
      description:
        'Sambara is a Buddhist Tantric God and is the King of knowledge having',
    },
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/159/BAG007.png',
      title: 'Durga',
      price: '1600',
      description:
        'Sambara is a Buddhist Tantric God and is the King of knowledge having',
    },
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/156/BAG002.png',
      title: 'Buddha in meditation',
      price: '200AD',
      description:
        'Taxila was an important centre for flourishing of monastic activity du',
    },
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/101/IBA013.png',
      title: 'Naga Muchalinda',
      price: '200BCE',
      description:
        'The Vinaya Pitaka, during the forty-nine days of contemplation by Budd..',
    },
  ];;


  const renderCard = (card, index) => {
    return (
      <div className='card-div' key={index}>
        <Card>
          <div className='card-img-div'>
            <Card.Img className='card-img' variant='top' src={card.image} />
          </div>
          <Card.Body>
            <div className='main-title'>
              <div className='title'>
                <Card.Title className='title-text'>{card.title}</Card.Title>
                <div className='ArtifactCard_border'></div>
              </div>
              <p>{card.price}</p>
            </div>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };


 
  return (
    <div className='homemain'>
      <div className='overlay'>
        <div className='main-overlay'></div>
        <div className='text-overlay'>
          <h2>WORLD  OF <br /> HERITAGE AND MUSEUMS IN STUNNING 3D</h2>
          <p>High quality and research grade digital scans to <br /> explore the museum and heritage artifacts.</p>
          
          <Link to="/Artifacts" className='preview-button'>TRY NOW!</Link>
        </div>
        <div className='banner-image'></div>
      </div>

      
       <div className='Main-Cards-Container'>
        <h3 className='Home-tile'>Feature Artifacts</h3>
        <Link to='/Artifacts' className='Full-Artifacts-view'>
          View all
        </Link>
        {cardInfo.map(renderCard)}
        <h3 className='swipe'>Swipe
        <i class="ri-arrow-right-fill"></i>
        </h3>
      </div>



      <div className='third-Container'>
        <div className='first'>
        <h3>Introducing Museumverse</h3>
        <p>Unlocking the World of Heritage and Culture</p>
        <p>Step into a world where the past comes alive in stunning 3D. Welcome to Museumverse, the innovative platform revolutionizing the way we experience museums, heritage, and artifacts..</p>
        <br />
        <p>Our mission at Museumverse is to create a phyigital realm, where the treasures of museums and cultural institutions are showcased in research-grade accuracy. We believe that everyone should have access to the rich tapestry of human history, regardless of geographical limitations or space constraints...</p>
        <button className='read-more'>Read More</button>

        </div>
        <div className='second'>
          <img src="	https://museumverse.net/static/media/unsplash_VgQ_zGNvm84.c8bd683dd62a1360668a3eda25962b41.svg" alt="" />
        </div>
      </div>
      <footer>
        <div className='footer-links'>
        <Link to="/About">ABOUT US</Link>
          <a href="#">CONTACT US</a>
          </div>
          <div className='footer-small-line'></div>
          <div className='footer-address'>
            <div>
            <i className="ri-phone-line"></i>
              +912345678
            </div>
            <div style={{ width: "400px" }}>
            <i className="ri-map-pin-line"></i>
            
              B-103, Fourth Floor, Behind Triveni Complex, Panchsheel ganga complex Vihar, New Delhi, 11001
            </div>
            <div>
            <i className="ri-mail-line"></i>
            info@varahaworld.com
            </div>
          </div>
          <div className='footer-small-second-line'></div>
          <p>Copyright © 2020. Museumverse. All rights reserved.</p>
      </footer>
    </div>
    
  );
}

export default Home;