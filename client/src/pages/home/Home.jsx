import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import { Featured } from '../../components/featured/featured';
const Home = () => {
  return (
    <div>
      <NavBar />
      <Header></Header>
      <div className='homeContainer'>
          <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
