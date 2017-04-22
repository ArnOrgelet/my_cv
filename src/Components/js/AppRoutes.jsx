
import routes from '../../app-routes';
import {React, Component} from 'react';
import {Router, browserHistory} from 'react-router';

export default class AppRoutes extends Component {
   render() {
      return (
         <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      );
   }
}
