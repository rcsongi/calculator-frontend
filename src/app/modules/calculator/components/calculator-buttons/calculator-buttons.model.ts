export interface CalculatorButtonModel {
  value: number | OperatorType;
  display: string;
}

export enum OperatorType {
  PLUSMINUS = 'PLUSMINUS',
  COMMA = 'COMMA',
  EQUAL = 'EQUAL',
  PLUS = 'PLUS',
  MINUS = 'MINUS',
  MULTIPLIER = 'MULTIPLIER',
  DIVISION = 'DIVISION',
  CLEAR = 'CLEAR',
  CLEARENTRY = 'CLEARENTRY',
  BACK = 'BACK',
}

export const CALCULATOR_BUTTONS: CalculatorButtonModel[] = [
  {
    value: OperatorType.CLEARENTRY,
    display: 'CE',
  },
  {
    value: OperatorType.CLEAR,
    display: 'C',
  },
  {
    value: OperatorType.BACK,
    display: '<<',
  },
  {
    value: OperatorType.DIVISION,
    display: '÷',
  },
  {
    value: 7,
    display: '7',
  },
  {
    value: 8,
    display: '8',
  },
  {
    value: 9,
    display: '9',
  },
  {
    value: OperatorType.MULTIPLIER,
    display: '×',
  },
  {
    value: 4,
    display: '4',
  },
  {
    value: 5,
    display: '5',
  },
  {
    value: 6,
    display: '6',
  },
  {
    value: OperatorType.MINUS,
    display: '-',
  },
  {
    value: 1,
    display: '1',
  },
  {
    value: 2,
    display: '2',
  },
  {
    value: 3,
    display: '3',
  },
  {
    value: OperatorType.PLUS,
    display: '+',
  },
  {
    value: OperatorType.PLUSMINUS,
    display: '±',
  },
  {
    value: 0,
    display: '0',
  },
  {
    value: OperatorType.COMMA,
    display: ',',
  },
  {
    value: OperatorType.EQUAL,
    display: '=',
  },
];
