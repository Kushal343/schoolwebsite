import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import sportsday from '../assets/sportsday.jpg';
import science from '../assets/science.jpg';
import cultural from '../assets/cultural.jpg';

const Home = () => (
  <main>
    <h1 className="text-center my-4">Welcome to Springdale Public School</h1>
    <p className="text-center mb-5">Where we nurture young minds for a brighter future.</p>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={sportsday} alt="Sports Day" />
        <Carousel.Caption>
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={science} alt="Science Exhibition" />
        <Carousel.Caption>
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cultural} alt="Cultural Fest" />
        <Carousel.Caption>
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </main>
);

export default Home;

