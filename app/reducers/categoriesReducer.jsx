
/*
 * categoriesReducer
 */

import {
  SET_CATEGORIES_INDEX,
} from '../constants'

import AppDispatcher from '../dispatcher/AppDispatcher'
import config from 'config'

function categoriesIndexReducer (state = {}, action) {

  // console.log('+++ +++ cat idx reducer:', action)

  switch (action.type) {
    case SET_CATEGORIES_INDEX:
      return action.categories.categories
    default:
      return state
  }
}

export default {
  categoriesIndexReducer,
}
