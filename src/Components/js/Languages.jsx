'use strict'
import {React, Coponent} from 'react';

const langs = [
   {
      code : "en",
      name : "English",
      countries = ['England', 'USA']
   },
   {
      code : "fr",
      name : "French",
      countries = ['France', 'Belgium', 'Switzerland']
   },
   {
      code : "de",
      name : "German",
      countries = ['Germany', 'Austria', 'Switzerland']
   },
   {
      code : "it",
      name : "Italian",
      countries = ['Italy', 'Switzerland']
   },
]

export default class Languages extends Component {
   constructor(props){
      super(props);
      this.state = {
         activeLanguage: props.langs[0],
      };
   }
   updateLanguage(){
      this.props.updateLanguage(this.state.activeLanguage);
   }
   render{
      const langOpts = /*Object.keys(lang)*/langs.filter(x => props.langs.contains(x['code']));
      return (
         <div class='cv-language-frame'>
            <select class='cv-input-selection-language' name="lng" onChange={evt => console.log(evt)}>//evt.target !== this.state.activeLanguage ? this.setState({languageHasChanged : true}) : null}>
            {
               props.langs.map(lang => {
                  <option value={lang}><Flag ctry = {langOpts.filter(lng => lng.code === lang).map(lng => lng.Countries[0])}></option>
               })
            }
            </select>
            <input id="cv-input-validation-language" type="button" value="OK" disabled={() => this.state.activeLanguage !== $('.cv-input-selection-language').val()} onClick={() => this.props.update.bind(this)}/>
         </div>
      );
   }
}

Languages.propTypes = {
   langs = PropTypes.arrayOf(PropTypes.string).isRequired;
}
Languages.defaultProps = {
   langs: ['fr', 'en']
};
