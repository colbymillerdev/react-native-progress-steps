import type { ViewStyle, TextStyle, ScrollViewProps, ViewProps } from 'react-native';
export interface ProgressStepsProps
  extends Omit<StepIconProps, 'stepNum' | 'isFirstStep' | 'isLastStep' | 'isActiveStep' | 'isCompletedStep' | 'label'> {
  isComplete?: boolean;
  activeStep?: number;
  topOffset?: number;
  marginBottom?: number;
  children: React.ReactElement<ProgressStepProps>[];
}

export interface ProgressStepsState {
  stepCount: number;
  activeStep: number;
}

export interface ProgressStepProps {
  // Internal props (set by parent)
  setActiveStep?: (step: number) => void;
  activeStep?: number;
  stepCount?: number;

  // User-provided props
  label?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  onSubmit?: () => void;
  nextBtnText?: string;
  previousBtnText?: string;
  finishBtnText?: string;
  nextBtnDisabled?: boolean;
  previousBtnDisabled?: boolean;
  scrollViewProps?: ScrollViewProps;
  scrollable?: boolean;
  viewProps?: ViewProps;
  errors?: boolean;
  removeBtnRow?: boolean;
  children?: React.ReactNode;
  buttonTopOffset?: number;
  buttonBottomOffset?: number;
  buttonHorizontalOffset?: number;
  buttonFillColor?: string;
  buttonNextTextColor?: string;
  buttonPreviousTextColor?: string;
  buttonFinishTextColor?: string;
  buttonBorderColor?: string;
  buttonDisabledColor?: string;
  buttonDisabledTextColor?: string;
}

export interface StepIconProps {
  // Required props
  stepNum: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  isActiveStep: boolean;
  isCompletedStep: boolean;
  label?: string;

  // Style props (all optional with defaults)
  borderWidth?: number;
  borderStyle?: ViewStyle['borderStyle'];
  activeStepIconBorderColor?: string;
  progressBarColor?: string;
  completedProgressBarColor?: string;
  activeStepIconColor?: string;
  disabledStepIconColor?: string;
  completedStepIconColor?: string;
  labelFontFamily?: string;
  labelColor?: string;
  labelFontSize?: number;
  activeLabelColor?: string;
  activeLabelFontSize?: number;
  completedLabelColor?: string;
  activeStepNumColor?: string;
  completedStepNumColor?: string;
  disabledStepNumColor?: string;
  completedCheckColor?: string;
}

export interface StepIconStyles {
  circleStyle: ViewStyle;
  circleText: TextStyle;
  labelText: TextStyle;
  leftBar: ViewStyle;
  rightBar: ViewStyle;
  stepNum: TextStyle;
}
