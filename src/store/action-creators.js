import store from 'react-native-simple-store'

const STORE_EXPERIMENTS = 'experiments'
const STORE_USER = 'user'

export function loadLocalStateExperiments() {
  return function (dispatch) {
    store.get(STORE_EXPERIMENTS)
      .then(experiments => {
        // dispatch({ type: 'SET_EXPERIMENTS_STATE', experiments })
        const fakeExperiments = {
          data: [
            {
              id: 'abc123',
              title: 'Diet Experiment',
              state: 'active',
              form: [],
              measurments: []
            }
          ],
          map: {
            abc123: 0
          }
        }
        dispatch({ type: 'SET_EXPERIMENTS_STATE', experiments: fakeExperiments })
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
