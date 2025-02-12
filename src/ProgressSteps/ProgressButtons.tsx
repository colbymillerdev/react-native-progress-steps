import React from 'react';
import { View } from 'react-native';
import type { ProgressButtonsProps } from '../types';

const ProgressButtons: React.FC<ProgressButtonsProps> = ({ renderNextButton, renderPreviousButton }) => (
  <View style={{ flexDirection: 'row', marginTop: 90 }}>
    <View style={{ position: 'absolute', left: 60, bottom: 40 }}>{renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 60, bottom: 40 }}>{renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
