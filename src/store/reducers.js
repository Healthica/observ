import _findIndex from 'lodash/findIndex'

const initialExperimentsState = []
export function experiments(state = initialExperimentsState, action) {
  switch (action.type) {
    case 'SET_EXPERIMENTS_STATE':
      return action.experiments

    case 'ADD_EXPERIMENT':
      return [
      ...state,
      action.experiment
    ]

    case 'UPDATE_EXPERIMENT':
      const newState = state.slice()
      const index = _findIndex(newState, { id: action.experiment.id })
      if (index > -1) {
        newState[index] = Object.assign({}, newState[index], action.experiment)
      }
      return newState

    case 'DELETE_EXPERIMENT':
      return _.reject(state, { id: action.experimentId })

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
