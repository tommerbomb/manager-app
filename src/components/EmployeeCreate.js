import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
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
          <CardSection>
            <Input
            label='Name'
            placeholder='John Doe'
            value={this.props.name}
            onChangeText={text => { this.props.employeeUpdate({ prop: 'name', value: text }); }}
            />
          </CardSection>
          <CardSection>
            <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            onChangeText={text => { this.props.employeeUpdate({ prop: 'phone', value: text }); }}
            />
          </CardSection>
          <CardSection style={styles.pickerContainerStyle}>
            <Text style={styles.pickerTextStyle}>Shift</Text>
              <Picker
              selectedValue={this.props.shift}
              onValueChange={value => { this.props.employeeUpdate({ prop: 'shift', value }); }}
              style={{ flex: 1 }}
              >
                <Picker.Item label='Monday' value={1} />
                <Picker.Item label='Tuesday' value={2} />
                <Picker.Item label='Wednesday' value={3} />
                <Picker.Item label='Thursday' value={4} />
                <Picker.Item label='Friday' value={5} />
                <Picker.Item label='Saturday' value={6} />
                <Picker.Item label='Sunday' value={0} />
              </Picker>
          </CardSection>
        </Card>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  pickerContainerStyle: {
    flexDirection: 'column'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
 })(EmployeeCreate);
