import { actions } from './learn.actions'
import { getters } from './learn.getters'
import { mutations } from './learn.mutations'
import { state } from './learn.state'

export const learn ={
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}
