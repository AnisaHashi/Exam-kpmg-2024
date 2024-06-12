import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

import { VscCalendar } from "react-icons/vsc";
import { SlPicture } from "react-icons/sl";
import { VscBellDot } from "react-icons/vsc";
import { BiFoodMenu } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { useEffect } from "react";

const steps = [
  { title: "Today's Agenda", description: "" },
  { title: "Reminder", description: "" },
  { title: "Canteen Menu", description: "" },
  { title: "Photo Gellery", description: "" },
];

export function Steps(props) {
  const { activeStep, setActiveStep } = useSteps({
    index: 2,
    count: steps.length,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevActiveStep) => {
        const newIndex =
          prevActiveStep === steps.length - 1 ? 0 : prevActiveStep + 1;
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    props.onChange(activeStep);
  }, [activeStep, props]);

  const renderIcon = (index) => {
    switch (index) {
      case 0:
        return <VscCalendar size={25} />;
      case 1:
        return <VscBellDot size={25} />;
      case 2:
        return <BiFoodMenu size={25} />;
      case 3:
        return <SlPicture size={25} />;

      default:
        return null;
    }
  };

  return (
    <Stepper
      className="mt-2"
      position={"relative"}
      size="md"
      color="dark"
      index={activeStep}
      orientation="vertical"
      height="700px"
      gap="0" // Ensure gap is minimal
    >
      {steps.map((step, index) => (
        <Step key={index} mb="2">
          {" "}
          {/* Adjust margin-bottom to control spacing */}
          <StepIndicator>
            <StepStatus incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0" mt="1" mb="1">
            {" "}
            {/* Adjust margin-top and margin-bottom */}
            <div className="d-flex mt-1 align-items-center">
              {renderIcon(index)}
              <h6 className="mx-2 fst-normal" color="#00338D">
                {step.title}
              </h6>
            </div>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
