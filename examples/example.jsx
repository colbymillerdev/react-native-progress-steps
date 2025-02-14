import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';

export default function ExampleProgressSteps() {
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: 'center',
    },
  };

  const onPaymentStepComplete = () => {
    console.log('payment step completed!');
  };

  const onNextStep = () => {
    console.log('called next step');
  };

  const onPrevStep = () => {
    console.log('called previous step');
  };

  const onSubmitSteps = () => {
    console.log('called submit step');
  };

  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps>
        <ProgressStep
          label='Payment'
          onNext={onPaymentStepComplete}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Payment step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label='Shipping Address'
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Shipping address step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label='Billing Address'
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Billing address step content</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          label='Confirm Order'
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
          scrollViewProps={defaultScrollViewProps}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>Confirm order step content</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}
