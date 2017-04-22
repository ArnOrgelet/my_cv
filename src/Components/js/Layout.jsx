'use strict'
import {React, Component} from 'react';
import ReactDom from 'react-dom';
import Menu from './Menu';
import menu from '../../data/menu';

export default class Layout extends Component{
   constructor(props){
      super(props);
      //this.state = {language : 'fr'}
   }
   updateLanguage(lng){
       this.setState({language : lng});
   }
   getMenu(){
      () => {
         var language = this.state.language;
         () => {menu}
      }
   }
   render(){
       return (
           <div>
           <p>dddddd</p>
         <head>
            <div class='cv-input-languages'>
               <Languages update={this.updateLanguage} />
            </div>
         </head>
         <nav>
            <Menu data={menu} />
         </nav>
         <div class="cv-container">
            {this.props.children}
         </div>
         <footer>
            Website realized with React
         </footer>
         </div>
      )
   }
}
