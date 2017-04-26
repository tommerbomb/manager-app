import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <View>
        <Card>
          <EmployeeForm {...this.props} />
        </Card>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
 })(EmployeeCreate);
