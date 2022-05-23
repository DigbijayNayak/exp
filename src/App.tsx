import { Redirect, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { LoginPage } from './pages/Login';
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
import { SignupPage } from './pages/Signup';
import { ResetPasswordPage } from './pages/ResetPassword';
import AppStack from './pages/AppStack';

setupIonicReact();

const App: React.FC = () => {
  return(
    <Router>
      <IonApp>
      <IonReactRouter>
        <IonPage>
          <IonRouterOutlet>
            <Route path="/login" component={LoginPage} exact={true} />
            <Route path="/signup" component={SignupPage} exact={true} />
            <Route path="/reset-password" component={ResetPasswordPage} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/signup" />} />
          </IonRouterOutlet>
          <Route path="/tabs" component={AppStack} />
        </IonPage>
      </IonReactRouter>
    </IonApp>
    </Router>
  )
};

export default App;
