'use strict'
 import {React, Component} from 'react';

 export default class Menu extends Component{
    constructor(props){
      super(props);
   }
    render(){
        return(
            <ul>
                {this.props.data.menu.map( item => {
                    <MenuItem id = {item.key} />
                })}
            </ul>
      )
   }
}
