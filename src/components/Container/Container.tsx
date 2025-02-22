import { PageContainer } from "@toolpad/core/PageContainer";
import { Stepper } from "@/components/Stepper/Stepper";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

type ContainerProps = {
  children: React.ReactNode;
  showStepper?: boolean;
};
export function Container({ children, showStepper = true }: ContainerProps) {
  const { step, isMobile } = useTetrisLabContext();

  return (
    <PageContainer
      title=""
      slots={{
        header: () => <></>,
      }}
    >
      {showStepper && !isMobile && <Stepper activeStep={step} />}
      {children}
    </PageContainer>
  );
}

export default Container;
