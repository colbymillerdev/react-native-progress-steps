import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';

import StepIcon from './StepIcon';

class ProgressSteps extends Component {
  state = {
    stepCount: 0,
    activeStep: 0
  };

  componentDidMount() {
    this.setState({ stepCount: React.Children.count(this.props.children) });
  }

  getChildProps() {
    return { ...this.props, ...this.state };
  }

  renderStepIcons = () => {
    let step = [];

    _.times(this.state.stepCount, i => {
      step.push(
        <View key={i}>
          <View>
            <StepIcon
              {...this.getChildProps()}
              stepNum={i + 1}
              label={this.props.children[i].props.label}
              isFirstStep={i === 0}
              isLastStep={i === this.state.stepCount - 1}
              isCompletedStep={i < this.state.activeStep}
              isActiveStep={i === this.state.activeStep}
            />
          </View>
        </View>
      );
    });

    return step;
  };

  // Callback function from ProgressStep that passes current step.
  setActiveStep = step => {
    console.log('called setActiveStep');
    this.setState({ activeStep: step });
  };

  render() {
    const styles = {
      container: {
        flex: 1,
        alignItems: 'center'
      },
      stepIcons: {
        position: 'relative',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        top: this.props.positionFromTop
      },
      bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.stepIcons}>{this.renderStepIcons()}</View>
        <View style={{ flex: 1 }}>
          {React.cloneElement(this.props.children[this.state.activeStep], {
            setActiveStep: this.setActiveStep,
            activeStep: this.state.activeStep,
            stepCount: this.state.stepCount,
            containerStyle: this.props.containerStyle
          })}
        </View>
      </View>
    );
  }
}

ProgressSteps.propTypes = {
  labelWidth: PropTypes.number,
  positionFromTop: PropTypes.number,
  containerStyle: PropTypes.object
};

ProgressSteps.defaultProps = {
  labelWidth: 100,
  positionFromTop: 30,
  containerStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' }
};

export default ProgressSteps;
