import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Card, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

const dateArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

class EmployeeEdit extends Component {

state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, id: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${dateArray[shift]}`);
    console.log('texting');
  }

changeModalVisibility() {
  this.setState({ showModal: !this.state.showModal });
  console.log(this);
}

onAccept() {

}

  render() {
    return (
      <View>
        <Card>
          <EmployeeForm {...this.props} />
        </Card>
          <Button
          onPress={this.onButtonPress.bind(this)}
          >
            Save
          </Button>
          <Button
          onPress={this.onTextPress.bind(this)}
          >
            Text
          </Button>
          <Button
          onPress={this.changeModalVisibility.bind(this)}
          >
            Fire
          </Button>

          <Confirm
            visible={this.state.showModal}
            onDecline={this.changeModalVisibility.bind(this)}
            onAccept={() => {
              this.changeModalVisibility();
              this.props.employeeDelete({ id: this.props.employee.uid });
              Actions.employeeList();
            }}
          >
            Are you sure you want to fire this employee?
          </Confirm>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
