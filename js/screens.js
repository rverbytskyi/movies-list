import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import LoadingScreen from './containers/Loading'
import HomeScreen from './containers/Home'
import SelectedFilmsScreen from './containers/SelectedFilms'

import store from './store'
import wrapper from './wrappers/AppStateListeners'

export function registerScreens() {
  Navigation.registerComponentWithRedux(
    'loadingScreen',
    () => wrapper(LoadingScreen),
    Provider,
    store,
  )
  Navigation.registerComponentWithRedux(
    'homeScreen',
    () => wrapper(HomeScreen),
    Provider,
    store,
  )
  Navigation.registerComponentWithRedux(
    'selectedFilmsScreen',
    () => wrapper(SelectedFilmsScreen),
    Provider,
    store,
  )
}
