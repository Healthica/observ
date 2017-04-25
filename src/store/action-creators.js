import store from 'react-native-simple-store'

const STORE_EXPERIMENTS = 'experiments'
const STORE_USER = 'user'

export function loadLocalStateExperiments() {
  return function (dispatch) {
    store.get(STORE_EXPERIMENTS)
      .then(experiments => {
        const fakeExperiments = [
          {
            id: 'abc333',
            title: 'Diet Experiment',
            status: 'active',
            form: [],
            measurments: [],
            settings: {},
            results: {
              effectSize: 1.4,
              significance: 92.1,
              remainingDays: 6,
              progress: 0.4
            }
          }
        ]
        // dispatch({ type: 'SET_EXPERIMENTS_STATE', experiments: fakeExperiments })
        dispatch({ type: 'SET_EXPERIMENTS_STATE', experiments })
      })
      .catch(error => {
        dispatch({ type: 'ERROR', error })
      })
  }
}

export function saveLocalStateExperiments(state) {
  return function (dispatch) {
    store.save(STORE_EXPERIMENTS, state)
  }
}

export function loadLocalStateUser() {
  return function (dispatch) {
    store.get(STORE_USER)
      .then(user => {
        dispatch({ type: 'SET_USER_STATE', user })
      })
      .catch(error => {
        dispatch({ type: 'ERROR', error })
      })
  }
}

export function setUserFirstTime(value) {
  return function (dispatch, getState) {
    dispatch({
      type: 'SET_USER_STATE',
      user: {
        is_first_time: value
      }
    })
    store.save(STORE_USER, getState().user)
  }
}

export function saveLocalStateUser(state) {
  return function (dispatch) {
    store.save(STORE_USER, state)
  }
}

export function addExperiment(experiment) {
  return function (dispatch, getState) {
    dispatch({ type: 'ADD_EXPERIMENT', experiment })
    store.save(STORE_EXPERIMENTS, getState().experiments)
  }
}

export function updateExperiment(experiment) {
  return function (dispatch, getState) {
    dispatch({ type: 'UPDATE_EXPERIMENT', experiment })
    store.save(STORE_EXPERIMENTS, getState().experiments)
  }
}

export function deleteExperiment(experimentId) {
  return function (dispatch, getState) {
    dispatch({ type: 'DELETE_EXPERIMENT', experimentId })
    store.save(STORE_EXPERIMENTS, getState().experiments)
  }
}

export function openDrawer() {
  return { type: 'DRAWER_OPEN' }
}

export function closeDrawer() {
  return { type: 'DRAWER_CLOSE' }
}
