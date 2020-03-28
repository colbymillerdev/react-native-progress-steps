import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import ProgressButtons from './ProgressButtons';

class ProgressStep extends Component {
  onNextStep = async () => {
    this.props.onNext && (await this.props.onNext());

    // Return out of method before moving to next step if errors exist.
    if (this.props.errors) {
      return;
    }

    this.props.setActiveStep(this.props.activeStep + 1);
  };

  onPreviousStep = () => {
    // Changes active index and calls previous function passed by parent
    this.props.onPrevious && this.props.onPrevious();
    this.props.setActiveStep(this.props.activeStep - 1);
  };

  onSkipStep = () => {
    console.debug('onskip!');
  }

  onRestart = () => {
    console.debug('onRestart!');
  }

  onSubmit = () => {
    this.props.onSubmit && this.props.onSubmit();
  };

  renderNextButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.nextBtnStyle
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.nextBtnTextStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    let textStyle = [btnTextStyle];
    if (this.props.nextBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={this.props.activeStep === this.props.stepCount - 1 ? this.onSubmit : this.onNextStep}
        disabled={this.props.nextBtnDisabled}
      >
        <Text style={textStyle}>
          {this.props.activeStep === this.props.stepCount - 1 ? this.props.finishBtnText : this.props.nextBtnText}
        </Text>
      </TouchableOpacity>
    );
  };

  renderPreviousButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.previousBtnStyle
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.previousBtnTextStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    let textStyle = [btnTextStyle];
    if (this.props.previousBtnDisabled) textStyle.push(disabledBtnText);

    return (
      <TouchableOpacity style={btnStyle} onPress={this.onPreviousStep} disabled={this.props.previousBtnDisabled}>
        <Text style={textStyle}>{this.props.activeStep === 0 ? '' : this.props.previousBtnText}</Text>
      </TouchableOpacity>
    );
  };

  renderSkipButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.skipBtnStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.skipBtnTextStyle
    };

    let textStyle = [btnTextStyle];
    if (this.props.skipBtnDisabled) textStyle.push(disabledBtnText);

    return (
        <TouchableOpacity style={btnStyle} onPress={this.onSkipStep} disabled={this.props.skipBtnDisabled}>
          <Text style={textStyle}>{this.props.activeStep === 0 ? '' : this.props.skipBtnText}</Text>
        </TouchableOpacity>
    );
  };

  renderRestartButton = () => {
    const btnStyle = {
      textAlign: 'center',
      padding: 8,
      ...this.props.restartBtnStyle
    };

    const btnTextStyle = {
      color: '#007AFF',
      fontSize: 18,
      ...this.props.restartBtnTextStyle
    };

    const disabledBtnText = {
      color: '#cdcdcd'
    };

    let textStyle = [btnTextStyle];
    if (this.props.restartBtnDisabled) textStyle.push(disabledBtnText);

    return (
        <TouchableOpacity style={btnStyle} onPress={this.onRestart} disabled={this.props.restartBtnDisabled}>
          <Text style={textStyle}>{this.props.activeStep === 0 ? '' : this.props.restartBtnText}</Text>
        </TouchableOpacity>
    );
  };

  render() {
    const scrollViewProps = this.props.scrollViewProps || {};

    return (
      <View style={{ flex: 1 }}>
        <ScrollView {...scrollViewProps}>{this.props.children}</ScrollView>

        <ProgressButtons
            renderNextButton={this.renderNextButton}
            renderSkipButton={this.renderSkipButton}
            renderRestartButton={this.renderRestartButton}
            renderPreviousButton={this.renderPreviousButton} />
      </View>
    );
  }
}

ProgressStep.propTypes = {
  label: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  onSkipStep: PropTypes.func,
  onRestart: PropTypes.func,
  onSubmit: PropTypes.func,
  setActiveStep: PropTypes.func,
  nextBtnText: PropTypes.string,
  previousBtnText: PropTypes.string,
  finishBtnText: PropTypes.string,
  stepCount: PropTypes.number,
  nextBtnStyle: PropTypes.object,
  nextBtnTextStyle: PropTypes.object,
  nextBtnDisabled: PropTypes.bool,
  previousBtnStyle: PropTypes.object,
  previousBtnTextStyle: PropTypes.object,
  previousBtnDisabled: PropTypes.bool,
  scrollViewProps: PropTypes.object,
  errors: PropTypes.bool
};

ProgressStep.defaultProps = {
  nextBtnText: 'Next',
  previousBtnText: 'Previous',
  skipBtnText: 'Skip',
  restartBtnText: 'Start Over',
  finishBtnText: 'Submit',
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false
};

export default ProgressStep;
