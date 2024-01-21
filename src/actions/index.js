export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const SET_TOTAL = "SET_TOTAL";
export const APPLY_MR = "APPLY_MR"
export const MEMORY_CLEAR = "MEMORY_CLEAR" 
export const CLEAR_ALL = "CLEAR_ALL"

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operation) => {
  return ({ type: CHANGE_OPERATION, payload: operation });
} //changeOperation isimli bir action yazdık. parametre olarak operation değerini alacak. Bize bir obje döndürecek. Bu objenin type'ı CHANGE_OPERATION, payload'ı da argümandan gelen operation.


export const setTotal = () => ({
    type: SET_TOTAL, 
}) //SET_TOTAL (bastığımızda mevcut değeri memory'ye kaydedecek M+ butonu) için action creator fonksiyonu yazdık. 

export const applyMr = () => ({
    type: APPLY_MR,
}) // APPLY_MR için action creator yazdık. 

export const memoryClear = () => ({
  type: MEMORY_CLEAR,
}) // MEMORY_CLEAR için action creator yazdık.

export const clearAll = () => ({
  type: CLEAR_ALL,
}) // CLEAR_ALL için action creator yazdık.