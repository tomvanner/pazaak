import React from 'react';
import BackgroundVideo from 'components/BackgroundVideo/BackgroundVideo';
import Button from 'components/Button/Button';
import { Title } from './HomeStyles';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const Home = () => {
  return (
    <BackgroundVideo 
      videoSrc="https://pazaak.s3.eu-west-2.amazonaws.com/homeVideo.mp4"
    >
      <Container>
        <Row justify="center">
          <Col lg={12}>
            <Title>
              Pazaak
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col lg={12}>
            <Button text="Play" href="#" />
          </Col>
        </Row>
      </Container>
    </BackgroundVideo>
  );
}
  
export default Home;
