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

  render() {
    const centerContainer = {
      flex: 1,
      justifyContent: 'center'
    };

    const prevButtonDefault = this.props.containerPrevButtonsStyle ? this.props.containerPrevButtonsStyle : { position: 'absolute', left: 60, bottom: 40 };
    const nextButtonDefault = this.props.containerNextButtonsStyle ? this.props.containerNextButtonsStyle : { position: 'absolute', right: 60, bottom: 40 };

    console.log(this.props, 'this.props');

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={this.props.centerContainer && centerContainer}>
          {this.props.children}
        </ScrollView>

        <ProgressButtons {...this.props} prevButtonDefault={prevButtonDefault} nextButtonDefault={nextButtonDefault} renderNextButton={this.renderNextButton} renderPreviousButton={this.renderPreviousButton} />
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
  nextBtnTextStyle: PropTypes.object,
  nextBtnDisabled: PropTypes.bool,
  previousBtnStyle: PropTypes.object,
  previousBtnTextStyle: PropTypes.object,
  previousBtnDisabled: PropTypes.bool,
  centerContainer: PropTypes.bool,
  errors: PropTypes.bool
};

ProgressStep.defaultProps = {
  nextBtnText: 'Next',
  previousBtnText: 'Previous',
  finishBtnText: 'Submit',
  nextBtnDisabled: false,
  previousBtnDisabled: false,
  errors: false
};

export default ProgressStep;
