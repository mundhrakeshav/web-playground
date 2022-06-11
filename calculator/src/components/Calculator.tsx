import { FunctionComponent } from "React";
import { Container, Center, Grid, GridItem } from "@chakra-ui/react";
import "./Calculator.css";
import ResultBox from "./ResultBox";

interface CalculatorProps {}

const Calculator: FunctionComponent<CalculatorProps> = () => {
  return (
    <Container minW="400px" maxW="500px" p="10" background="#22252e"  borderRadius={10}>
      <ResultBox/>
      <Grid
        minH="600px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={2}
      >
        <CalculatorButton text={"Num Lock"} />
        <CalculatorButton text={"/"} />
        <CalculatorButton text={"*"} />
        <CalculatorButton text={"-"} />
        <CalculatorButton text={"7"} />
        <CalculatorButton text={"8"} />
        <CalculatorButton text={"9"} />
        <CalculatorButton text={"+"} rowSpan={2} />
        <CalculatorButton text={"4"} />
        <CalculatorButton text={"5"} />
        <CalculatorButton text={"6"} />
        <CalculatorButton text={"1"} />
        <CalculatorButton text={"2"} />
        <CalculatorButton text={"3"} />
        <CalculatorButton text={"Enter"} rowSpan={2} />
        <CalculatorButton text={"0"} />
        <CalculatorButton text={"Del"} />
        <CalculatorButton text={"."} />
      </Grid>
    </Container>
  );
};

interface CalculatorButtonProps {
  text: string;
  colSpan?: number;
  rowSpan?: number;
}

const CalculatorButton: FunctionComponent<CalculatorButtonProps> = (props) => {
  const { colSpan = 1, rowSpan = 1 } = props;
  return (
    <GridItem as="button" colSpan={colSpan} rowSpan={rowSpan} bg="grey" className="calc-btn" borderRadius={10} background="#2a2d38">
      {props.text}
    </GridItem>
  );
};

export default Calculator;
