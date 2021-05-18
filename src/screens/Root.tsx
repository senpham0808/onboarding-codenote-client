import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from '../components/AppliedRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import Navigation from '../components/Navigation';
import Home from './Home';
import NoteDetail from './NoteDetail';
import NewNote from './NewNote';
import Signup from './Signup';
import Login from './Login';
import NotFound from './NotFound';

const ScreensRoot = (params: { childProps: any}) => (
  <Fragment>
    <AppliedRoute component={Navigation} props={params.childProps}/>
    <Switch>
      <AppliedRoute exact path="/" component={Home} props={params.childProps}/>
      <UnauthenticatedRoute path="/signup" exact component={Signup} props={params.childProps}/>
      <UnauthenticatedRoute path="/login" exact component={Login} props={params.childProps}/>
      <AuthenticatedRoute path="/notes/new" exact component={NewNote} props={params.childProps}/>
      <AuthenticatedRoute path="/notes/:id" exact component={NoteDetail} props={params.childProps}/>
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default ScreensRoot;
