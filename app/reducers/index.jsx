
import { combineReducers } from 'redux'

import {
  SET_API_URL,
} from '../constants'

function apiUrlReducer(state = 'no-state', action) {
  switch (action.type) {
    case SET_API_URL:
      return action.apiUrl
    default:
      return state
  }
}

import { categoriesIndexReducer } from './categoriesReducer'

/* import { citiesIndexReducer, citiesShowReducer } from './citiesReducer'
import { galleriesShowReducer } from './galleriesReducer'
import { reportsShowReducer } from './reportsReducer'
import { sitesReducer } from './sitesReducer' */

export default combineReducers({
  apiUrl: apiUrlReducer,

  categories: categoriesIndexReducer,

  /* citiesIndex: citiesIndexReducer,
  city: citiesShowReducer,

  gallery: galleriesShowReducer,

  report: reportsShowReducer,

  siteNewsitems: sitesReducer, */
})
