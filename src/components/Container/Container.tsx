import { PageContainer } from "@toolpad/core/PageContainer";
import { Stepper } from "@/components/Stepper/Stepper";
import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { useStepperContext } from "@/state/StepperContext";

type ContainerProps = {
  children: React.ReactNode;
  showStepper?: boolean;
};
export function Container({ children, showStepper = true }: ContainerProps) {
  const { isDesktop } = useTetrisLabContext();
  const { step } = useStepperContext();

  return (
    <PageContainer
      title=""
      slots={{
        header: () => <></>,
      }}
      sx={{ height: "100%" }}
    >
      {showStepper && isDesktop && <Stepper activeStep={step - 1} />}
      {children}
    </PageContainer>
  );
}

export default Container;
