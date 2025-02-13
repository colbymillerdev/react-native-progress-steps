import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import type { StepIconProps } from '../types';

const CIRCLE_SIZE = 40;
const MOBILE_BREAKPOINT = 768;
const MOBILE_LINE_POSITION = 78;
const DESKTOP_LINE_POSITION = 58;

const StepIcon = ({
  borderWidth = 2,
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

  const getLinePosition = () => {
    const screenWidth = Dimensions.get('window').width;
    const isMobileWidth = screenWidth <= MOBILE_BREAKPOINT;
    return isMobileWidth ? MOBILE_LINE_POSITION : DESKTOP_LINE_POSITION;
  };

  const getLineColor = (isLeftLine: boolean) => {
    if (isLeftLine && (isCompletedStep || isActiveStep)) {
      return completedProgressBarColor;
    }

    if (!isLeftLine && isCompletedStep) {
      return completedProgressBarColor;
    }

    return progressBarColor;
  };

  const getStepColor = () => {
    if (isActiveStep) return activeStepIconColor;
    if (isCompletedStep) return completedStepIconColor;
    return disabledStepIconColor;
  };

  const getLabelColor = () => {
    if (isActiveStep) return activeLabelColor;
    if (isCompletedStep) return completedLabelColor;
    return labelColor;
  };

  const getNumberColor = () => {
    if (isActiveStep) return activeStepNumColor;
    if (isCompletedStep) return completedStepNumColor;
    return disabledStepNumColor;
  };

  const linePosition = getLinePosition();

  const renderLine = (isLeft: boolean) => (
    <View
      style={[
        styles.line,
        {
          position: 'absolute',
          ...(isLeft ? { left: 0, right: `${linePosition}%` } : { left: `${linePosition}%`, right: 0 }),
          height: borderWidth,
          backgroundColor: getLineColor(isLeft),
        },
      ]}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        {!isFirstStep && renderLine(true)}
        <View
          style={[
            styles.circle,
            {
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
              backgroundColor: getStepColor(),
              ...(isActiveStep && {
                borderColor: activeStepIconBorderColor,
                borderWidth: 5,
              }),
            },
          ]}
        >
          {isCompletedStep ? (
            <Text style={[styles.stepText, { color: completedCheckColor }]}>&#10003;</Text>
          ) : (
            <Text style={[styles.stepText, { color: getNumberColor() }]}>{stepNum}</Text>
          )}
        </View>
        {!isLastStep && renderLine(false)}
      </View>
      <Text
        style={[
          styles.label,
          {
            color: getLabelColor(),
            fontSize: isActiveStep ? activeLabelFontSize || labelFontSize : labelFontSize,
            fontFamily: labelFontFamily,
          },
        ]}
        numberOfLines={2}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  lineContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  line: {
    zIndex: 1,
  },
  stepText: {
    fontSize: 16,
    fontWeight: '500',
  },
  label: {
    textAlign: 'center',
    marginTop: 8,
    maxWidth: '80%',
  },
});

export default StepIcon;
