
/*
 * categoriesReducer
 */

import {
  SET_CATEGORY,
  SET_CATEGORIES_INDEX,
} from '../constants'

import AppDispatcher from '../dispatcher/AppDispatcher'
import config from 'config'

function categoryReducer (state = {}, action) {

  // console.log('+++ +++ category reducer:', action)

  switch (action.type) {
    case SET_CATEGORY:
      return action.category
    default: return state
  }
}

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
  categoryReducer,
  categoriesIndexReducer,
}
