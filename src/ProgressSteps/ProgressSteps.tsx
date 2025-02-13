import React from 'react';
import { View } from 'react-native';
import { times } from 'lodash';
import StepIcon from './StepIcon';
import type { ProgressStepsProps, ProgressStepsState } from '../types';

const ProgressSteps = ({
  children,
  isComplete = false,
  activeStep: initialActiveStep = 0,
  topOffset = 30,
  marginBottom = 50,
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
    if (step >= stepCount - 1) {
      setActiveStep(stepCount - 1);
    } else if (step > -1 && step < stepCount - 1) {
      setActiveStep(step);
    }
  };

  const renderStepIcons = (): JSX.Element[] => {
    const step: JSX.Element[] = [];

    times(stepCount, (i) => {
      const isCompletedStep = isComplete ? true : i < activeStep;
      const isActiveStep = isComplete ? false : i === activeStep;

      step.push(
        <View key={i}>
          <View>
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
        </View>
      );
    });

    return step;
  };

  const styles = {
    stepIcons: {
      position: 'relative',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      flexDirection: 'row',
      top: topOffset,
      marginBottom: marginBottom,
    } as const,
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.stepIcons}>{renderStepIcons()}</View>
      <View style={{ flex: 1 }}>
        {React.cloneElement(children[activeStep], {
          setActiveStep: handleSetActiveStep,
          activeStep,
          stepCount,
        })}
      </View>
    </View>
  );
};

export default ProgressSteps;
