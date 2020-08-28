import Head from 'next/head'

import webativaLogo from '../assets/logo250.png';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <img src={webativaLogo} alt="Logo"/>
      <h1>ReactJS Structura</h1>
      <p>A ReactJs + NextJS structure made by WebAtiva</p>
    </Container>
  )
}

export default Home
