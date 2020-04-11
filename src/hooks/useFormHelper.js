import { useState } from "react";
import produce from "immer";

function useFormHelper() {
  const initialValues = {}
  const [state, setState] = useState(initialValues)
  const immerSetState = newState => setState(currentState => produce(currentState, newState));

  const _handleOnChangeInput = e => {
    const { name, value } = e.target
    immerSetState(draft => {
      draft[name] = value
    })
  }


  const _handleOnChangeInputArray = (e, i) => {
    const { name, value } = e.target
    immerSetState(draft => {
      draft[i][name] = value
    })
  }
  const _handleOnChangeSelectArray = (value) => {
  }

  return {
    state,
    immerSetState,
    _handleOnChangeInput,
    _handleOnChangeInputArray,
    _handleOnChangeSelectArray,
  }
}

export default useFormHelper
