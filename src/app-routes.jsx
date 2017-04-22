'use strict';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './Components/js/Layout';
import Home from './Components/js/Home';
import Resume from './Components/js/Resume';
import Skills from './Components/js/Skills';
import Projects from './Components/js/Projects';
import Leisures from './Components/js/Leisures';
import NotFoundPage from './Components/js/NotFoundPage';
const routes =
    (
        <Route path="/" Component = {Layout}>
                <IndexRoute Component = {Home} />
                <Route path="Resume" Component = {Resume} />
                <Route path="Skills" Component = {Skills} />
                <Route path="Projects" Component = {Projects} />
                <Route path="Leisures" Component = {Leisures} />
                <Route path="*" Component = {NotFoundPage} />
        </Route>
    );

 export default routes;
