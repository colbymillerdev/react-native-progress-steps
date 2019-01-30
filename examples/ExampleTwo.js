import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class ExampleTwo extends Component {
  static navigationOptions = {
    header: null
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <ProgressSteps>
          <ProgressStep
            label="First"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 1!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Second"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Third"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Fourth"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 4!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Fifth"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            centerContainer
          >
            <View style={{ alignItems: 'center' }}>
              <Text>This is the content within step 5!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default ExampleTwo;
