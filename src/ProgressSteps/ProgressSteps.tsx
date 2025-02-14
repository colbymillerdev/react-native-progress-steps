import React from 'react';
import { View, StyleSheet } from 'react-native';
import { times } from 'lodash';
import StepIcon from './StepIcon';
import type { ProgressStepsProps, ProgressStepsState } from '../types';

const ProgressSteps = ({
  children,
  isComplete = false,
  activeStep: initialActiveStep = 0,
  topOffset = 60,
  marginBottom = 30,
  ...props
}: ProgressStepsProps) => {
  const [stepCount, setStepCount] = React.useState<ProgressStepsState['stepCount']>(0);
  const [activeStep, setActiveStep] = React.useState<ProgressStepsState['activeStep']>(initialActiveStep);

  React.useEffect(() => {
    setStepCount(React.Children.count(children));
  }, [children]);

  React.useEffect(() => {
    setActiveStep(initialActiveStep);
  }, [initialActiveStep]);

  const handleSetActiveStep = (step: number): void => {
    const boundedStep = Math.min(Math.max(step, 0), stepCount - 1);
    setActiveStep(boundedStep);
  };

  const renderStepIcons = (): JSX.Element[] => {
    return times(stepCount, (i) => {
      const isCompletedStep = isComplete ? true : i < activeStep;
      const isActiveStep = isComplete ? false : i === activeStep;

      return (
        <View key={i} style={styles.stepContainer}>
          <StepIcon
            {...props}
            stepNum={i + 1}
            label={children[i].props.label}
            isFirstStep={i === 0}
            isLastStep={i === stepCount - 1}
            isCompletedStep={isCompletedStep}
            isActiveStep={isActiveStep}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.stepsContainer, { paddingTop: topOffset, marginBottom }]}>{renderStepIcons()}</View>
      <View style={styles.contentContainer}>
        {React.cloneElement(children[activeStep], {
          setActiveStep: handleSetActiveStep,
          activeStep,
          stepCount,
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  stepContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ProgressSteps;
