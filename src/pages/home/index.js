import React from 'react';
import Body from '../../components/body/index';
import ButtonComponent from '../../components/button';
import history from '../../services/history';
import { MainTitle } from './styles';

const Home = () => {
  return (
    <Body background="#add2f8">
      <MainTitle className="home-title">Ink Calculator</MainTitle>
      <ButtonComponent
        className="home-button"
        label="Get Started Here!"
        width="20vw"
        underline
        onClick={() => history.push('/calculator')}
      />
    </Body>
  );
};

export default Home;
