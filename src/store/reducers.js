const initialExperimentsState = {
  data: [],
  map: {}
}
export function experiments(state = initialExperimentsState, action) {
  switch (action.type) {
    case 'SET_EXPERIMENTS_STATE':
      return {
        ...state,
        ...action.experiments
      }
    case 'ADD_EXPERIMENT':
      return {
        ...state,
        data: [...state.data, action.experiment]
      }
    case 'ERROR':
      alert(JSON.stringify(action))
      return {
        ...state
      }
    default:
      return state
  }
}

const initialUserState = {
  id: false,
  is_registered: false,
  is_first_time: true
}
export function user(state = initialUserState, action) {
  switch (action.type) {
    case 'SET_USER_STATE':
      return {
        ...state,
        ...action.user
      }
    case 'ERROR':
      alert(JSON.stringify(action))
      return {
        ...state
      }
    default:
      return state
  }
}
