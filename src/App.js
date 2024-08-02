import './App.css';
import BodyFile from './components/body';
import FooterFile from './components/footer';
import HeaderFile from './components/header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import ShopComponent from './components/shopcomponents';
import LabReports from './components/labreportscomponents';
import Stack from "./components/stackcomponents";
import TrackOrder from "./components/trackordercomponents";
import Footer2 from './components/footer2';



export default function App() {
  return (

<Router>
  <HeaderFile/>
  
  <Switch>  <Route exact path="/shop" component={ShopComponent}/>  
  <Route exact path="/labreports" component={LabReports}/>
  <Route exact path="/stack" component={Stack}/>
  <Route exact path="/trackorder" component={TrackOrder}/>

  <BodyFile/>
  </Switch>
  <FooterFile/>
  <Footer2/>
</Router>

  )
}
