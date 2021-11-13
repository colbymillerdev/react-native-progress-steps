export default ProgressSteps;
declare class ProgressSteps {
    state: {
        stepCount: number;
        activeStep: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    getChildProps(): any;
    renderStepIcons: () => any[];
    setActiveStep: (step: any) => void;
    render(): any;
}
declare namespace ProgressSteps {
    namespace propTypes {
        const isComplete: any;
        const activeStep: any;
        const topOffset: any;
        const marginBottom: any;
    }
    namespace defaultProps {
        const isComplete_1: boolean;
        export { isComplete_1 as isComplete };
        const activeStep_1: number;
        export { activeStep_1 as activeStep };
        const topOffset_1: number;
        export { topOffset_1 as topOffset };
        const marginBottom_1: number;
        export { marginBottom_1 as marginBottom };
    }
}
