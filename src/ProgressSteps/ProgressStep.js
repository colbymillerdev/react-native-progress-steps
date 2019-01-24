import React, { Component } from 'react';
import { View, Button, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import ProgressButtons from './ProgressButtons';

class ProgressStep extends Component {
  onNextStep = () => {
    // Changes active index and calls next function passed by parent
    const activeStep = this.props.activeStep + 1;
    // Check if function prop has been passed.
    this.props.onNext && this.props.onNext();
    this.props.setActiveStep(activeStep);
  };

  onPreviousStep = () => {
    // Changes active index and calls previous function passed by parent
    const activeStep = this.props.activeStep - 1;
    this.props.onPrevious && this.props.onPrevious();
    this.props.setActiveStep(activeStep);
  };

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  renderNextButton = () => {
    return (
      <Button
        title={this.props.activeStep === this.props.stepCount - 1 ? this.props.finishBtnText : this.props.nextBtnText}
        onPress={this.props.activeStep === this.props.stepCount - 1 ? this.onSubmit : this.onNextStep}
        style={this.props.nextBtnStyle}
      />
    );
  };

  renderPreviousButton = () => {
    return (
      <Button
        title={this.props.previousBtnText}
        onPress={this.onPreviousStep}
        disabled={this.props.activeStep === 0}
        style={this.props.previousBtnStyle}
      />
    );
  };

  render() {
    const centerContainer = {
      flex: 1,
      justifyContent: 'center'
    };

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={this.props.centerContainer && centerContainer}>
          {this.props.children}
        </ScrollView>

        <ProgressButtons renderNextButton={this.renderNextButton} renderPreviousButton={this.renderPreviousButton} />
      </View>
    );
  }
}

ProgressStep.propTypes = {
  label: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onSubmit: PropTypes.func,
  setActiveStep: PropTypes.func,
  nextBtnText: PropTypes.string,
  previousBtnText: PropTypes.string,
  finishBtnText: PropTypes.string,
  stepCount: PropTypes.number,
  nextBtnStyle: PropTypes.object,
  previousBtnStyle: PropTypes.object,
  centerContainer: PropTypes.bool
};

ProgressStep.defaultProps = {
  nextBtnText: 'Next',
  previousBtnText: 'Previous',
  finishBtnText: 'Submit'
};

export default ProgressStep;
