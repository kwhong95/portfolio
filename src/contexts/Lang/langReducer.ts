import { LangActionType, LangState, SetLanguageAction } from './type'

export const langReducer = (
  state: LangState,
  action: SetLanguageAction
): LangState => {
  switch (action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload,
      }
    default:
      return state
  }
}
