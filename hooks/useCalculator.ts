import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "*",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");

  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("0");

  const lastOperator = useRef<Operator | undefined>(undefined);

  useEffect(() => {
    //TODO:calcular subresultado
    setFormula(number);
  }, [number]);

  //funcion de borrado
  const clean = () => {
    setNumber("0");
    setPreviousNumber("0");
    setFormula("");
    lastOperator.current = undefined;
  };

  //funcion de cambio de signo
  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    setNumber("-" + number);
  };

  const buildNumber = (numberString: string) => {
    // verificar si ya existe un punto decimal
    if (numberString === "." && number.includes(".")) return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      //punto decimal
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // evaluar si es otro cero y hay un punto
      else if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }
      // Evaluar si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }
      // Evitar 0000.0
      else if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    //props
    formula,
    number,
    previousNumber,

    //methods
    buildNumber,
    clean,
    toggleSign,
  };
};
