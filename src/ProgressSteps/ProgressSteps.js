import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import StepIcon from "./StepIcon";

class ProgressSteps extends Component {
  state = {
    stepCount: 0,
    activeStep: this.props.activeStep,
  };

  componentDidMount() {
    this.setState({ stepCount: React.Children.count(this.props.children) });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeStep !== this.props.activeStep) {
      this.setActiveStep(this.props.activeStep);
    }

    if (this.children.length !== prevProps.stepCount) {
      this.setState({
        ...this.state,
        stepCount: this.children.length,
      });
    }
  }

  get children() {
    return this.props.children.filter((it) => !!it);
  }

  getChildProps() {
    return { ...this.props, ...this.state };
  }

  renderStepIcons = () => {
    const children = this.children;
    return children.map((children, i) => {
      const isCompletedStep = this.props.isComplete
        ? true
        : i < this.state.activeStep;
      const isActiveStep = this.props.isComplete
        ? false
        : i === this.state.activeStep;

      const isLastStep = i === children.length - 1;
      return (
        <View key={i}>
          <View>
            <StepIcon
              {...this.getChildProps()}
              stepNum={i + 1}
              label={children.props.label}
              isFirstStep={i === 0}
              isLastStep={isLastStep}
              isCompletedStep={isCompletedStep}
              isActiveStep={isActiveStep}
            />
          </View>
        </View>
      );
    });
  };

  // Callback function from ProgressStep that passes current step.
  setActiveStep = (step) => {
    // Guard against setting current step higher than total step count.
    if (step >= this.state.stepCount - 1) {
      this.setState({ activeStep: this.state.stepCount - 1 });
    }

    if (step > -1 && step < this.state.stepCount - 1) {
      this.setState({ activeStep: step });
    }
  };

  render() {
    const styles = {
      stepIcons: {
        position: "relative",
        justifyContent: "space-evenly",
        alignSelf: "center",
        flexDirection: "row",
        top: this.props.topOffset,
        marginBottom: this.props.marginBottom,
      },
    };
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.stepIcons}>{this.renderStepIcons()}</View>
        <View style={{ flex: 1 }}>
          {React.cloneElement(this.children[this.state.activeStep], {
            setActiveStep: this.setActiveStep,
            activeStep: this.state.activeStep,
            stepCount: this.state.stepCount,
          })}
        </View>
      </View>
    );
  }
}

ProgressSteps.propTypes = {
  isComplete: PropTypes.bool,
  activeStep: PropTypes.number,
  topOffset: PropTypes.number,
  marginBottom: PropTypes.number,
};

ProgressSteps.defaultProps = {
  isComplete: false,
  activeStep: 0,
  topOffset: 30,
  marginBottom: 50,
};

export default ProgressSteps;
