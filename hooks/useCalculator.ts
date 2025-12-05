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
    if (lastOperator.current) {
      const firstFormulaPart = formula.split(" ").at(0); // obtener la primera parte de la formula
      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  // Actualizar el resultado previo cuando la formula cambie
  useEffect(() => {
    const subresult = calculateSubresult();
    setPreviousNumber(subresult.toString());
  }, [formula]);

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

  //funcion de borrado de ultimo numero
  const deleteLast = () => {
    let curretSing = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      curretSing = "-";
      temporalNumber = number.replace("-", "");
    }

    if (temporalNumber.length > 1) {
      const newNumber = temporalNumber.slice(0, -1);
      setNumber(curretSing + newNumber);
    } else {
      setNumber("0");
    }
  };

  //funcion para guardar el numero anterior
  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith(".")) {
      setPreviousNumber(number.slice(0, -1));
    }
    setPreviousNumber(number);
    setNumber("0");
  };

  const divideOperations = () => {
    setLastNumber();
    lastOperator.current = Operator.divide;
  };
  const multiplyOperations = () => {
    setLastNumber();
    lastOperator.current = Operator.multiply;
  };
  const subtractOperations = () => {
    setLastNumber();
    lastOperator.current = Operator.subtract;
  };
  const addOperations = () => {
    setLastNumber();
    lastOperator.current = Operator.add;
  };

  //funcion para calcular el subresultado
  const calculateSubresult = () => {
    const [firstValue, operator, secondValue] = formula.split(" ");

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operator) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error(`Operador ${operator} no reconocido`);
    }
  };

  //funcion para calcular el resultado final
  const calculateResult = () => {
    const result = calculateSubresult();
    setFormula(result.toString());
    setPreviousNumber("0");
    lastOperator.current = undefined;
  };

  //funcion para construir el numero
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
    deleteLast,
    divideOperations,
    multiplyOperations,
    subtractOperations,
    addOperations,
    calculateResult,
  };
};
