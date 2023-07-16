import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import './Artifacts.css';
import Card from 'react-bootstrap/Card';

const Artifacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

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
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/151/GAG017.png',
      title: 'Ushnishavijaya',
      price: '1000Ad',
      description:
        'The eight-armed Indian goddess Ushnishavijaya is one of three deities ',
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
    {
      image:
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/101/IBA013.png',
      title: 'Naga Muchalinda',
      price: '200BCE',
      description:
        'The Vinaya Pitaka, during the forty-nine days of contemplation by Budd..',
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
        'https://api.museumverse.net/server/artifacts/uploaded_images/artifacts_img_sets/159/BAG007.png',
      title: 'Durga',
      price: '1600',
      description:
        'Sambara is a Buddhist Tantric God and is the King of knowledge having',
    },
  ];

  useState(() => {
    setFilteredCards(cardInfo);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterCards(event.target.value);
  };

  const filterCards = (searchTerm) => {
    const filtered = cardInfo.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  };

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
    <div className='Artifacts-Main'>
      <div className='containerFilter'>
        <input
          className='inputSearch'
          type='text'
          placeholder="Search from the world's antique collection"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className='filter-Button'>
          <i className='ri-equalizer-line'></i>
          FILTERS
        </button>
      </div>

      <div className='Artifacts-Cards'>
        {filteredCards.map(renderCard)}
      </div>
    </div>
  );
};

export default Artifacts;
