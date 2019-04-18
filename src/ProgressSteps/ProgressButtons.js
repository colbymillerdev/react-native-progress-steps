import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={[{ flexDirection: 'row', marginTop: 90 }, props.customProgressButtonsStyle]}>
    <View style={props.prevButtonDefault}>{props.renderPreviousButton()}</View>
    <View style={props.nextButtonDefault}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
