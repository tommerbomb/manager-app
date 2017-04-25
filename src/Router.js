import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const image = require('../back_chevron.png');

const RouterComponent = () => {
  return (
      <Router sceneStyle={{ paddingTop: 75 }}>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' />
        </Scene>
        <Scene key='main'>
          <Scene
          onRight={() => { Actions.employeeCreate(); }}
          rightTitle='Add'
          key='employeeList'
          component={EmployeeList}
          title='Employees'
          initial
          />
          <Scene
          backButtonImage={image}
          key='employeeCreate'
          component={EmployeeCreate}
          title='Create Employee'
          />
        </Scene>
      </Router>
  );
};

export default RouterComponent;
