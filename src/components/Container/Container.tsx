import { PageContainer } from "@toolpad/core/PageContainer";
import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { useTetrisLabContext } from "@/state/TetrisLabContext";

type ContainerProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  showStepper?: boolean;
};
export function Container({
  children,
  showStepper = true,
  showHeader = true,
}: ContainerProps) {
  const { step } = useTetrisLabContext();

  return (
    <PageContainer
      title=""
      slots={{
        header: () =>
          showHeader ? (
            <StudyHeader
              breadcrumbs={[{ title: "Pilot Study", path: "/info-sheet" }]}
            />
          ) : (
            <></>
          ),
      }}
    >
      {showStepper && <Stepper activeStep={step} />}
      {children}
    </PageContainer>
  );
}

export default Container;
