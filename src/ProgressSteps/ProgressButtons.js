import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 90 }}>
    <View style={{ position: 'absolute', left: 60, bottom: props.buttonBottom }}>{props.renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 60, bottom: props.buttonBottom }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
