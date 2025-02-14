import React from 'react';
import { View, ScrollView, Text, Pressable, ViewStyle, TextStyle } from 'react-native';
import type { ProgressStepProps } from '../types';

const ProgressStep = ({
  errors = false,
  removeBtnRow = false,
  scrollable = true,
  activeStep = 0,
  stepCount = 0,
  buttonNextText = 'Next',
  buttonPreviousText = 'Previous',
  buttonFinishText = 'Submit',
  buttonNextDisabled = false,
  buttonPreviousDisabled = false,
  buttonFinishDisabled = false,
  buttonBottomOffset = 20,
  buttonTopOffset = 12,
  buttonHorizontalOffset = 30,
  buttonFillColor = '#2D2D2D',
  buttonNextTextColor = '#FFFFFF',
  buttonPreviousTextColor = '#2D2D2D',
  buttonFinishTextColor = '#FFFFFF',
  buttonBorderColor = '#2D2D2D',
  buttonDisabledColor = '#CDCDCD',
  buttonDisabledTextColor = '#FFFFFF',
  ...props
}: ProgressStepProps) => {
  const isPreviousBtnHidden = activeStep === 0;
  const isFirstStep = activeStep === 0;

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

  const baseButtonStyle: ViewStyle = {
    height: 48,
    minWidth: 120,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const baseTextStyle: TextStyle = {
    fontSize: 16,
    fontWeight: '500',
  };

  const renderNextButton = (): JSX.Element => (
    <Pressable
      style={({ pressed }) => [
        baseButtonStyle,
        {
          backgroundColor: buttonFillColor,
          opacity: pressed ? 0.8 : 1,
        },
        buttonNextDisabled && { backgroundColor: buttonDisabledColor },
      ]}
      onPress={onNextStep}
      disabled={buttonNextDisabled}
    >
      <Text style={[baseTextStyle, { color: buttonNextTextColor }]}>{buttonNextText}</Text>
    </Pressable>
  );

  const renderPreviousButton = (): JSX.Element => (
    <Pressable
      style={({ pressed }) => [
        baseButtonStyle,
        {
          borderWidth: 1,
          borderColor: buttonPreviousDisabled ? 'transparent' : buttonBorderColor,
          opacity: pressed ? 0.8 : 1,
        },
        buttonPreviousDisabled && { backgroundColor: buttonDisabledColor },
      ]}
      onPress={onPreviousStep}
      disabled={buttonPreviousDisabled}
    >
      <Text
        style={[baseTextStyle, { color: buttonPreviousDisabled ? buttonDisabledTextColor : buttonPreviousTextColor }]}
      >
        {isFirstStep ? '' : buttonPreviousText}
      </Text>
    </Pressable>
  );

  const renderSubmitButton = (): JSX.Element => (
    <Pressable
      style={({ pressed }) => [
        baseButtonStyle,
        {
          backgroundColor: buttonFillColor,
          opacity: pressed ? 0.8 : 1,
        },
        buttonFinishDisabled && { backgroundColor: buttonDisabledColor },
      ]}
      onPress={props.onSubmit}
      disabled={buttonFinishDisabled}
    >
      <Text style={[baseTextStyle, { color: buttonFinishTextColor }]}>{buttonFinishText}</Text>
    </Pressable>
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
            marginTop: buttonTopOffset,
            marginBottom: buttonBottomOffset,
            marginHorizontal: buttonHorizontalOffset,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1, alignItems: 'flex-start' }}>{!isPreviousBtnHidden && renderPreviousButton()}</View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            {activeStep === stepCount - 1 ? renderSubmitButton() : renderNextButton()}
          </View>
        </View>
      )}
    </View>
  );
};

export default ProgressStep;
