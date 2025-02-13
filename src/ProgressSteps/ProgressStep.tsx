import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import type { ProgressStepProps } from '../types';

const ProgressStep = ({
  nextBtnText = 'Next',
  previousBtnText = 'Previous',
  finishBtnText = 'Submit',
  nextBtnDisabled = false,
  previousBtnDisabled = false,
  errors = false,
  removeBtnRow = false,
  scrollable = true,
  activeStep = 0,
  stepCount = 0,
  ...props
}: ProgressStepProps) => {
  const onNextStep = (): void => {
    props.onNext?.();

    if (!errors && props.setActiveStep) {
      props.setActiveStep(activeStep + 1);
    }
  };

  const onPreviousStep = (): void => {
    props.onPrevious?.();

    if (props.setActiveStep) {
      props.setActiveStep(activeStep - 1);
    }
  };

  const renderNextButton = (): JSX.Element => (
    <TouchableOpacity style={[{ padding: 8 }, props.nextBtnStyle]} onPress={onNextStep} disabled={nextBtnDisabled}>
      <Text style={[{ color: '#007AFF', fontSize: 18 }, props.nextBtnTextStyle]}>{nextBtnText}</Text>
    </TouchableOpacity>
  );

  const renderPreviousButton = (): JSX.Element => (
    <TouchableOpacity
      style={[{ padding: 8 }, props.previousBtnStyle]}
      onPress={onPreviousStep}
      disabled={previousBtnDisabled || activeStep === 0}
    >
      <Text style={[{ color: '#007AFF', fontSize: 18 }, props.previousBtnTextStyle]}>{previousBtnText}</Text>
    </TouchableOpacity>
  );

  const renderSubmitButton = (): JSX.Element => (
    <TouchableOpacity style={[{ padding: 8 }, props.nextBtnStyle]} onPress={props.onSubmit}>
      <Text style={[{ color: '#007AFF', fontSize: 18 }, props.nextBtnTextStyle]}>{finishBtnText}</Text>
    </TouchableOpacity>
  );

  const Container = scrollable ? ScrollView : View;
  const containerProps = scrollable ? props.scrollViewProps : props.viewProps;

  return (
    <View style={{ flex: 1 }}>
      <Container {...containerProps} style={{ flex: 1, marginHorizontal: 20 }}>
        {props.children}
      </Container>
      {!removeBtnRow && (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
            marginBottom: 12,
            marginHorizontal: 12,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>{renderPreviousButton()}</View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            {activeStep === stepCount - 1 ? renderSubmitButton() : renderNextButton()}
          </View>
        </View>
      )}
    </View>
  );
};

export default ProgressStep;
