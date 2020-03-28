import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 90 }}>
    <View style={{ position: 'absolute', left: 60, bottom: 40 }}>{props.renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 180, bottom: 40 }}>{props.renderRestartButton()}</View>
    <View style={{ position: 'absolute', right: 120, bottom: 40 }}>{props.renderSkipButton()}</View>
    <View style={{ position: 'absolute', right: 60, bottom: 40 }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
