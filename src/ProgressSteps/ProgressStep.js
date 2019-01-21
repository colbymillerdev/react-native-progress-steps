import React, { Component } from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';

class ProgressStep extends Component {
  onNextStep = () => {
    // Changes active index and calls next function passed by parent
    const activeStep = this.props.activeStep + 1;
    this.props.onNext();
    this.props.setActiveStep(activeStep);
  };

  onPreviousStep = () => {
    // Changes active index and calls previous function passed by parent
    const activeStep = this.props.activeStep - 1;
    this.props.onPrevious();
    this.props.setActiveStep(activeStep);
  };

  onSubmit = () => {
    this.props.onSubmit();
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
    return (
      <View>
        <View style={this.props.containerStyle}>{this.props.children}</View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ position: 'absolute', right: 0, bottom: 60 }}>{this.renderNextButton()}</View>
          <View style={{ position: 'absolute', left: 0, bottom: 60 }}>{this.renderPreviousButton()}</View>
        </View>
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
  containerStyle: PropTypes.object,
  nextBtnStyle: PropTypes.object,
  previousBtnStyle: PropTypes.object
};

ProgressStep.defaultProps = {
  nextBtnText: 'Next',
  previousBtnText: 'Previous',
  finishBtnText: 'Submit'
};

export default ProgressStep;
