import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 40 }}>
    <View style={{ position: 'absolute', left: 60, bottom: 10 }}>{props.renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 60, bottom: 10 }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
