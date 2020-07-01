import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class StepIcon extends Component {
  render() {
    let styles;

    if (this.props.isActiveStep) {
      styles = {
        circleStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: this.props.activeStepIconColor,
          borderColor: this.props.activeStepIconBorderColor,
          borderWidth: 5,
          bottom: 2,
        },
        circleText: {
          alignSelf: 'center',
          top: 20 / 3,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.activeLabelColor,
          fontSize: this.props.activeLabelFontSize || this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 40 / 2.22,
          left: 0,
          right: 40 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 40 / 2 + 2,
        },
        rightBar: {
          position: 'absolute',
          top: 40 / 2.22,
          right: 0,
          left: 40 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 40 / 2 + 2,
        },
        stepNum: {
          color: this.props.activeStepNumColor,
        },
      };
    } else if (this.props.isCompletedStep) {
      styles = {
        circleStyle: {
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: this.props.completedStepIconColor,
        },
        circleText: {
          alignSelf: 'center',
          top: 18 / 2,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.completedLabelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 36 / 2,
          left: 0,
          right: 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: 36 / 2,
          right: 0,
          left: 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: this.props.completedStepNumColor,
        },
      };
    } else {
      styles = {
        circleStyle: {
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: this.props.disabledStepIconColor,
        },
        circleText: {
          alignSelf: 'center',
          top: 18 / 2,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 36 / 2,
          left: 0,
          right: 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: 36 / 2,
          right: 0,
          left: 36 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: this.props.disabledStepNumColor,
        },
      };
    }

    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={styles.circleStyle}>
          <Text style={styles.circleText}>
            {this.props.isCompletedStep ? (
              <Text style={{ color: this.props.completedCheckColor }}>&#10003;</Text>
            ) : (
              <Text style={styles.stepNum}>{this.props.stepNum}</Text>
            )}
          </Text>
        </View>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {!this.props.isFirstStep && <View style={styles.leftBar} />}
        {!this.props.isLastStep && <View style={styles.rightBar} />}
      </View>
    );
  }
}

StepIcon.propTypes = {
  stepCount: PropTypes.number.isRequired,
  stepNum: PropTypes.number.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,

  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  activeStepIconBorderColor: PropTypes.string,

  progressBarColor: PropTypes.string,
  completedProgressBarColor: PropTypes.string,

  activeStepIconColor: PropTypes.string,
  disabledStepIconColor: PropTypes.string,
  completedStepIconColor: PropTypes.string,

  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.number,
  activeLabelColor: PropTypes.string,
  activeLabelFontSize: PropTypes.number,
  completedLabelColor: PropTypes.string,

  activeStepNumColor: PropTypes.string,
  completedStepNumColor: PropTypes.string,
  disabledStepNumColor: PropTypes.string,

  completedCheckColor: PropTypes.string,
};

StepIcon.defaultProps = {
  borderWidth: 3,
  borderStyle: 'solid',
  activeStepIconBorderColor: '#4BB543',

  progressBarColor: '#ebebe4',
  completedProgressBarColor: '#4BB543',

  activeStepIconColor: 'transparent',
  completedStepIconColor: '#4BB543',
  disabledStepIconColor: '#ebebe4',

  labelColor: 'lightgray',
  labelFontSize: 14,
  activeLabelColor: '#4BB543',
  completedLabelColor: 'lightgray',

  activeStepNumColor: 'black',
  completedStepNumColor: 'black',
  disabledStepNumColor: 'white',

  completedCheckColor: 'white',
};

export default StepIcon;
