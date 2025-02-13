import React from 'react';
import { View } from 'react-native';
import type { ProgressButtonsProps } from '../types';

const ProgressButtons = ({ renderNextButton, renderPreviousButton }: ProgressButtonsProps) => (
  <View style={{ flexDirection: 'row' }}>
    <View style={{ position: 'absolute' }}>{renderPreviousButton()}</View>
    <View style={{ position: 'absolute' }}>{renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
