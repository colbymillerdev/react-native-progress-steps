import React from 'react';
import { View, Text, TextStyle, ViewStyle } from 'react-native';
import type { StepIconProps, StepIconStyles } from '../types';

const StepIcon = ({
  borderWidth = 2,
  borderStyle = 'solid',
  activeStepIconBorderColor = '#4BB543',
  progressBarColor = '#ebebe4',
  completedProgressBarColor = '#4BB543',
  activeStepIconColor = 'transparent',
  completedStepIconColor = '#4BB543',
  disabledStepIconColor = '#ebebe4',
  labelColor = 'lightgray',
  labelFontSize = 14,
  activeLabelColor = '#4BB543',
  completedLabelColor = 'lightgray',
  activeStepNumColor = 'black',
  completedStepNumColor = 'black',
  disabledStepNumColor = 'white',
  completedCheckColor = 'white',
  ...props
}: StepIconProps) => {
  const {
    isActiveStep,
    isCompletedStep,
    isFirstStep,
    isLastStep,
    stepNum,
    label,
    labelFontFamily,
    activeLabelFontSize,
  } = props;

  const styles: StepIconStyles = React.useMemo(() => {
    const baseCircleStyle: ViewStyle = {
      width: 36,
      height: 36,
      borderRadius: 18,
    };

    const baseCircleText: TextStyle = {
      alignSelf: 'center',
      top: 18 / 2,
    };

    const baseLabelText: TextStyle = {
      textAlign: 'center',
      flexWrap: 'wrap',
      width: 100,
      paddingTop: 4,
      fontFamily: labelFontFamily,
      marginTop: 4,
      fontSize: labelFontSize,
    };

    const baseBarStyle: ViewStyle = {
      position: 'absolute',
      borderStyle: borderStyle,
      borderWidth: borderWidth,
    };

    if (isActiveStep) {
      return {
        circleStyle: {
          ...baseCircleStyle,
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: activeStepIconColor,
          borderColor: activeStepIconBorderColor,
          borderWidth: 5,
          bottom: 2,
        },
        circleText: {
          ...baseCircleText,
          top: 20 / 3,
        },
        labelText: {
          ...baseLabelText,
          marginTop: 0,
          color: activeLabelColor,
          fontSize: activeLabelFontSize || labelFontSize,
        },
        leftBar: {
          ...baseBarStyle,
          top: 40 / 2.22,
          left: 0,
          right: 40 + 8,
          borderColor: completedProgressBarColor,
          marginRight: 40 / 2 + 2,
        },
        rightBar: {
          ...baseBarStyle,
          top: 40 / 2.22,
          right: 0,
          left: 40 + 8,
          borderColor: progressBarColor,
          marginLeft: 40 / 2 + 2,
        },
        stepNum: {
          color: activeStepNumColor,
        },
      };
    } else {
      return {
        circleStyle: {
          ...baseCircleStyle,
          backgroundColor: isCompletedStep ? completedStepIconColor : disabledStepIconColor,
        },
        circleText: baseCircleText,
        labelText: {
          ...baseLabelText,
          color: isCompletedStep ? completedLabelColor : labelColor,
        },
        leftBar: {
          ...baseBarStyle,
          top: 36 / 2,
          left: 0,
          right: 36 + 8,
          borderColor: isCompletedStep ? completedProgressBarColor : progressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          ...baseBarStyle,
          top: 36 / 2,
          right: 0,
          left: 36 + 8,
          borderColor: isCompletedStep ? completedProgressBarColor : progressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: isCompletedStep ? completedStepNumColor : disabledStepNumColor,
        },
      };
    }
  }, [
    isActiveStep,
    isCompletedStep,
    activeStepIconColor,
    activeStepIconBorderColor,
    completedStepIconColor,
    disabledStepIconColor,
    activeLabelColor,
    completedLabelColor,
    labelColor,
    activeStepNumColor,
    completedStepNumColor,
    disabledStepNumColor,
    completedProgressBarColor,
    progressBarColor,
    borderStyle,
    borderWidth,
    labelFontFamily,
    labelFontSize,
    activeLabelFontSize,
  ]);

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <View style={styles.circleStyle}>
        <Text style={styles.circleText}>
          {isCompletedStep ? (
            <Text style={{ color: completedCheckColor }}>&#10003;</Text>
          ) : (
            <Text style={styles.stepNum}>{stepNum}</Text>
          )}
        </Text>
      </View>
      <Text style={styles.labelText}>{label}</Text>
      {!isFirstStep && <View style={styles.leftBar} />}
      {!isLastStep && <View style={styles.rightBar} />}
    </View>
  );
};

export default StepIcon;
