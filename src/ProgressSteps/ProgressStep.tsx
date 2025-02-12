import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import type { ProgressStepProps } from '../types';

export class ProgressStep extends Component<ProgressStepProps> {
  static defaultProps = {
    nextBtnText: 'Next',
    previousBtnText: 'Previous',
    finishBtnText: 'Submit',
    nextBtnDisabled: false,
    previousBtnDisabled: false,
    errors: false,
    removeBtnRow: false,
    scrollable: true,
  };

  onNextStep = (): void => {
    const { onNext, setActiveStep, activeStep = 0 } = this.props;
    onNext?.();

    if (!this.props.errors && setActiveStep) {
      setActiveStep(activeStep + 1);
    }
  };

  onPreviousStep = (): void => {
    const { onPrevious, setActiveStep, activeStep = 0 } = this.props;
    onPrevious?.();

    if (setActiveStep) {
      setActiveStep(activeStep - 1);
    }
  };

  onSubmit = (): void => {
    this.props.onSubmit?.();
  };

  renderNextButton = (): JSX.Element => {
    const { nextBtnText, nextBtnStyle, nextBtnTextStyle, nextBtnDisabled } = this.props;

    return (
      <TouchableOpacity style={[{ padding: 8 }, nextBtnStyle]} onPress={this.onNextStep} disabled={nextBtnDisabled}>
        <Text style={[{ color: '#007AFF', fontSize: 18 }, nextBtnTextStyle]}>{nextBtnText}</Text>
      </TouchableOpacity>
    );
  };

  renderPreviousButton = (): JSX.Element => {
    const { previousBtnText, previousBtnStyle, previousBtnTextStyle, previousBtnDisabled, activeStep } = this.props;

    return (
      <TouchableOpacity
        style={[{ padding: 8 }, previousBtnStyle]}
        onPress={this.onPreviousStep}
        disabled={previousBtnDisabled || activeStep === 0}
      >
        <Text style={[{ color: '#007AFF', fontSize: 18 }, previousBtnTextStyle]}>{previousBtnText}</Text>
      </TouchableOpacity>
    );
  };

  renderSubmitButton = (): JSX.Element => {
    const { finishBtnText, nextBtnStyle, nextBtnTextStyle } = this.props;

    return (
      <TouchableOpacity style={[{ padding: 8 }, nextBtnStyle]} onPress={this.onSubmit}>
        <Text style={[{ color: '#007AFF', fontSize: 18 }, nextBtnTextStyle]}>{finishBtnText}</Text>
      </TouchableOpacity>
    );
  };

  render(): JSX.Element {
    const {
      scrollable,
      removeBtnRow,
      scrollViewProps,
      viewProps,
      children,
      activeStep = 0,
      stepCount = 0,
    } = this.props;

    const Container = scrollable ? ScrollView : View;
    const containerProps = scrollable ? scrollViewProps : viewProps;

    return (
      <View style={{ flex: 1 }}>
        <Container {...containerProps} style={{ flex: 1 }}>
          {children}
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
            <View style={{ flex: 1 }}>{this.renderPreviousButton()}</View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              {activeStep === stepCount - 1 ? this.renderSubmitButton() : this.renderNextButton()}
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default ProgressStep;
