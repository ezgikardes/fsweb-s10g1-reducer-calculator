import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, SET_TOTAL, APPLY_MR, MEMORY_CLEAR, CLEAR_ALL } from './../actions';

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1 + num2;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    default:
      return;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case (ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total, action.payload, state.operation)
      });

    case (CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload
      });

    //bir case daha ekleyelim. (bastığımızda mevcut değeri memory'ye kaydedecek M+ butonu için) SET_TOTAL çalıştırdığında bize memory değerini state.total olarak döndürsün. 
    case (SET_TOTAL):
      return ({
        ...state,
        memory: state.total,
      });

    // applyMr için bir case daha ekliyoruz. bastığımızda, mevcut değere, memory değerine setleyip göndersin.
    case (APPLY_MR): 
      return ({
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      })

      
    //memoryClear için bir case daha ekliyoruz. bastığımızda memory'i sıfırlayıp göndersin.
    case (MEMORY_CLEAR):
      return ({
        ...state,
        memory: 0,
      })

    //clearAll için bir case daha ekliyoruz. bastığımızda state'in total field'ını sıfırlayıp göndersin.
    case (CLEAR_ALL):
      return ({
        ...state,
        total: 0,
      })

    default:
      return state;
  }
}

export default reducer;