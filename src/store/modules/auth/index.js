import { actions } from './auth.actions'
import { mutations } from './auth.mutations'
import { state } from './auth.state'

export const auth ={
    namespaced: true,
    state,
    actions,
    mutations,
  }
