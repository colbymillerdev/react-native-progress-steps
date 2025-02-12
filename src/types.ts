import type { ViewStyle, TextStyle, ScrollView, View } from 'react-native';

export interface ProgressButtonsProps {
  renderNextButton: () => JSX.Element;
  renderPreviousButton: () => JSX.Element;
}

export interface ProgressStepsProps {
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
  setActiveStep: (step: number) => void;
  activeStep: number;
  stepCount: number;

  // User-provided props
  label?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  onSubmit?: () => void;
  nextBtnText?: string;
  previousBtnText?: string;
  finishBtnText?: string;
  nextBtnStyle?: ViewStyle;
  nextBtnTextStyle?: TextStyle;
  nextBtnDisabled?: boolean;
  previousBtnStyle?: ViewStyle;
  previousBtnTextStyle?: TextStyle;
  previousBtnDisabled?: boolean;
  scrollViewProps?: React.ComponentProps<typeof ScrollView>;
  scrollable?: boolean;
  viewProps?: React.ComponentProps<typeof View>;
  errors?: boolean;
  removeBtnRow?: boolean;
  children?: React.ReactNode;
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
  borderStyle?: 'solid' | 'dotted' | 'dashed';
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
