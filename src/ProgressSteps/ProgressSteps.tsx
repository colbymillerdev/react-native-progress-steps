import React, { Component } from 'react';
import { View, ViewStyle } from 'react-native';
import { times } from 'lodash';
import StepIcon from './StepIcon';
import type { ProgressStepsProps, ProgressStepsState } from '../types';

class ProgressSteps extends Component<ProgressStepsProps, ProgressStepsState> {
  static defaultProps = {
    isComplete: false,
    activeStep: 0,
    topOffset: 30,
    marginBottom: 50,
  };

  state: ProgressStepsState = {
    stepCount: 0,
    activeStep: this.props.activeStep || 0,
  };

  componentDidMount(): void {
    this.setState({ stepCount: React.Children.count(this.props.children) });
  }

  componentDidUpdate(prevProps: ProgressStepsProps): void {
    if (prevProps.activeStep !== this.props.activeStep) {
      this.setActiveStep(this.props.activeStep || 0);
    }
  }

  getChildProps(): ProgressStepsProps & ProgressStepsState {
    return { ...this.props, ...this.state };
  }

  renderStepIcons = (): JSX.Element[] => {
    const step: JSX.Element[] = [];

    times(this.state.stepCount, (i) => {
      const isCompletedStep = this.props.isComplete ? true : i < this.state.activeStep;
      const isActiveStep = this.props.isComplete ? false : i === this.state.activeStep;

      step.push(
        <View key={i}>
          <View>
            <StepIcon
              {...this.getChildProps()}
              stepNum={i + 1}
              label={this.props.children[i].props.label}
              isFirstStep={i === 0}
              isLastStep={i === this.state.stepCount - 1}
              isCompletedStep={isCompletedStep}
              isActiveStep={isActiveStep}
            />
          </View>
        </View>
      );
    });

    return step;
  };

  setActiveStep = (step: number): void => {
    if (step >= this.state.stepCount - 1) {
      this.setState({ activeStep: this.state.stepCount - 1 });
    }

    if (step > -1 && step < this.state.stepCount - 1) {
      this.setState({ activeStep: step });
    }
  };

  render(): JSX.Element {
    const styles: { stepIcons: ViewStyle } = {
      stepIcons: {
        position: 'relative',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        flexDirection: 'row',
        top: this.props.topOffset,
        marginBottom: this.props.marginBottom,
      },
    };

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.stepIcons}>{this.renderStepIcons()}</View>
        <View style={{ flex: 1 }}>
          {React.cloneElement(this.props.children[this.state.activeStep], {
            setActiveStep: this.setActiveStep,
            activeStep: this.state.activeStep,
            stepCount: this.state.stepCount,
          })}
        </View>
      </View>
    );
  }
}

export default ProgressSteps;
