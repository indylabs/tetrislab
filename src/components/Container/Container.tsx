import { PageContainer } from "@toolpad/core/PageContainer";
import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  showHeader?: boolean;
  showStepper?: boolean;
};
export function Container({
  children,
  title,
  showStepper = true,
}: ContainerProps) {
  const { step } = useTetrisLabContext();

  return (
    <PageContainer
      title=""
      slots={{
        header: () => (title ? <StudyHeader title={title} /> : <></>),
      }}
    >
      {showStepper && <Stepper activeStep={step} />}
      {children}
    </PageContainer>
  );
}

export default Container;
