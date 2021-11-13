export default ProgressStep;
declare class ProgressStep {
    onNextStep: () => Promise<void>;
    onPreviousStep: () => void;
    onSubmit: () => void;
    renderNextButton: () => any;
    renderPreviousButton: () => any;
    render(): any;
}
declare namespace ProgressStep {
    namespace propTypes {
        const label: any;
        const onNext: any;
        const onPrevious: any;
        const onSubmit: any;
        const setActiveStep: any;
        const nextBtnText: any;
        const previousBtnText: any;
        const finishBtnText: any;
        const stepCount: any;
        const nextBtnStyle: any;
        const nextBtnTextStyle: any;
        const nextBtnDisabled: any;
        const previousBtnStyle: any;
        const previousBtnTextStyle: any;
        const previousBtnDisabled: any;
        const scrollViewProps: any;
        const viewProps: any;
        const errors: any;
        const removeBtnRow: any;
        const scrollable: any;
    }
    namespace defaultProps {
        const nextBtnText_1: string;
        export { nextBtnText_1 as nextBtnText };
        const previousBtnText_1: string;
        export { previousBtnText_1 as previousBtnText };
        const finishBtnText_1: string;
        export { finishBtnText_1 as finishBtnText };
        const nextBtnDisabled_1: boolean;
        export { nextBtnDisabled_1 as nextBtnDisabled };
        const previousBtnDisabled_1: boolean;
        export { previousBtnDisabled_1 as previousBtnDisabled };
        const errors_1: boolean;
        export { errors_1 as errors };
        const removeBtnRow_1: boolean;
        export { removeBtnRow_1 as removeBtnRow };
        const scrollable_1: boolean;
        export { scrollable_1 as scrollable };
    }
}
