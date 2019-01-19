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

  renderNextButton = () => {
    if (this.props.activeStep > 0) {
      return <Button title={this.props.previousBtnText} onPress={this.onPreviousStep} />;
    }
  };

  renderPreviousButton = () => {
    if (this.props.activeStep < this.props.stepCount - 1) {
      return <Button title={this.props.nextBtnText} onPress={this.onNextStep} />;
    }
  };

  render() {
    return (
      <View>
        {this.props.children}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {this.renderNextButton()}
          {this.renderPreviousButton()}
        </View>
      </View>
    );
  }
}

ProgressStep.propTypes = {
  label: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  setActiveStep: PropTypes.func,
  nextBtnText: PropTypes.string,
  previousBtnText: PropTypes.string,
  stepCount: PropTypes.number
};

ProgressStep.defaultProps = {
  nextBtnText: 'Next',
  previousBtnText: 'Previous'
};

export default ProgressStep;
