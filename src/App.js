import './App.css';
import Header from './Componant/Header/Header';
import Footer from './Componant/Footer/Footer';
import Home from './Container/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Contact from './Container/Contact/Contact';
import About from './Container/About/About';
import Shop from './Container/Shop/Shop';
import Slider from './Container/Slider/Slider';
import Static from './Container/Static/Static';
import News from './Container/News/News';
import Singlenews from './Container/Singlenews/Singlenews';
import Cart from './Container/Cart/Cart';
import Checkout from './Container/Checkout/Checkout';
import Singleproduct from './Container/Singleproduct/Singleproduct';
import Page404 from './Container/page40/Page404';
import Publicroute from './Root/Publicroute';
import Privateroute from './Root/Privateroute';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Publicroute path={"/Home"} exact component={Home}></Publicroute>
        <Privateroute path={"/Contact"} restricted={true} exact component={Contact}></Privateroute>
        <Publicroute path={"/About"} exact component={About}></Publicroute>
        <Publicroute path={"/Shop"} exact component={Shop}></Publicroute>
        <Publicroute path={"/Slider"} exact component={Slider}></Publicroute>
        <Publicroute path={"/Static"} exact component={Static}></Publicroute>
        <Publicroute path={"/News"} exact component={News}></Publicroute>
        <Publicroute path={"/Singlenews"} exact component={Singlenews}></Publicroute>
        <Publicroute path={"/Cart"} exact component={Cart}></Publicroute>
        <Publicroute path={"/Checkout"} exact component={Checkout}></Publicroute>
        <Publicroute path={"/Singleproduct"} exact component={Singleproduct}></Publicroute>
        <Publicroute path={"/Page404"} exact component={Page404}></Publicroute>
      </Switch>
      <Footer />
    </>

  );
}

export default App;
