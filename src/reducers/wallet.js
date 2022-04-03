import { RECEIVE_CODE_CURRERY_SUCCESS,
  RECEIVE_OBJECT_SUCCESS, DELETE_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  countedId: 0,
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CODE_CURRERY_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.currencies)
        .filter((currency) => currency !== 'USDT'),
    };
  case RECEIVE_OBJECT_SUCCESS: {
    const newCountedId = state.countedId + 1;
    const newExpenses = {
      id: state.countedId,
      ...action.expense,
      exchangeRates: action.exchangeRate,
    };
    return {
      ...state,
      countedId: newCountedId,
      expenses: [
        ...state.expenses,
        newExpenses,
      ],
    };
  }
  case DELETE_EXPENSE: {
    const newExpenses = action.expenses
      .filter((expense) => +expense.id !== +action.deleteExpenseId);
    return {
      ...state,
      expenses: newExpenses,
    };
  }
  default:
    return state;
  }
};

export default wallet;
