'use strict'
 import {React, Component} from 'react';

 export default class MenuItem extends Component{
    constructor(props){
      super(props);
   }
   render(){
      return (
         {
            <li>
                <div>
                   <img src={this.props.item.img}/>
                </div>
                this.props.item.submenus.map( submenu => {
                   <ul>
                      <li>{submenu.title}</li>
                   </ul>
                })
            </li>
         }
      );
   }
}
