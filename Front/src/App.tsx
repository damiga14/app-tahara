import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import PrologoYAgradecimientos from './pages/PrologoAgradecimientos'
import Diccionario from './pages/Diccionario'
import SheelatJajam from './pages/SheelatJajam'
import RevisionBedikot from './pages/RevisionBedikot'
import LeyesPureza from './pages/LeyesPureza';
import HalajaPage from './pages/HalajaPage';
import InfoTebilot from './pages/InfoTebilot'
import Haskamot from './pages/Haskamot'
import Contacto from './pages/Contacto'

import './pages/font.css'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => (
  <IonApp>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script');
    </style>

    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />

        <Route path="/prologoyagradecimientos" component={PrologoYAgradecimientos} />
        <Route path="/diccionario" component={Diccionario} />
        <Route path="/sheelatjajam" component={SheelatJajam} />
        <Route path="/revisionbedikot" component={RevisionBedikot} />
        <Route path="/infoTebilot" component={InfoTebilot} />
        <Route path="/leyespureza" component={LeyesPureza} />
        <Route path='/haskamot' component={Haskamot}/>
        <Route path='/contacto' component={Contacto}/>
        <Route path="/halajapage/:id" component={HalajaPage} exact />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
