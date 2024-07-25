import React from 'react';
import { Carousel } from 'react-bootstrap';
import schooltour from '../assets/schooltour.mp4';
import annual from '../assets/annual.mp4';
import classroom from '../assets/classroom.jpg';
import library from '../assets/library.jpg';

const Gallery = () => (
  <div>
    <h2 className="text-center my-4">Gallery</h2>
    <Carousel>
      <Carousel.Item>
        <video className="d-block w-100" src={schooltour} alt="School Tour" controls />
        <Carousel.Caption>
          <h3>School Tour</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <video className="d-block w-100" src={annual} alt="Annual Event" controls />
        <Carousel.Caption>
          <h3>Annual Event</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={classroom} alt="Classroom" />
        <Carousel.Caption>
          <h3>Classroom</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={library} alt="Library" />
        <Carousel.Caption>
          <h3>Library</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Gallery;
