import {useRef, useState} from 'react';

enum Operator {
    add,
    substract,
    multiply,
    divide,
}

export const useCalculator = () => {
    
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  const clean = () =>{
    setNumber('0');
    setPrevNumber('0');
  };

  const deleteOperation = () => {

    // Si es el ultimo número y no es negativo
    if (number.length === 1) return setNumber('0');

    // Si es el ultimo número y es negativo
    if (number.length === 2 && number.includes('-')) return setNumber('0');

    setNumber(number.slice(0, -1));
  };

  const toggleSign = () => {
    if (number.includes('-')) {
        return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {

    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0') ) {

        // Punto Decimal
        if (numberString === '.') {
            return setNumber(number + numberString);
        }

        // Evaluar si es otro cero y no hay punto
        if (numberString === '0' && number.includes('.')) {
            return setNumber(number + numberString);
        } 

        // Evaluar si es diferente de cero, no hay punto, y es el primer numero
        if (numberString !== '0' && !number.includes('.')) {

            if (number.includes('-')) {
                return setNumber('-' + numberString)
            }

            return setNumber(numberString)
        }

        // Evitar 0000000
        if (numberString === '0' && !number.includes('.')) {
            return;
        }

        return setNumber(number + numberString)
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () =>{
    if (number.endsWith('.')) {
        setPrevNumber(number.slice(0, -1));
    } else {
        setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () =>{
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch(lastOperation.current) {
        case Operator.add:
            setNumber(`${num1 + num2}`);
            break;

        case Operator.substract:
            setNumber(`${num2 - num1}`);
            break;

        case Operator.divide:
            setNumber(`${num2 / num1}`);
            break;

        case Operator.multiply:
            setNumber(`${num1 * num2}`);
            break;

        default:
            throw new Error('Operation not Implemented!')
    }

    setPrevNumber('0');
  };

  return {
    // Properties
    number,
    prevNumber,
    // Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult
  };
};


