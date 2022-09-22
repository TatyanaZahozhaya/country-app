import {
    applyMiddleware,
    legacy_createStore as createStore,
    combineReducers,
    compose,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AppStore } from '@shared';
import { countryReducer, detailsReducer, themeReducer, filterReducer } from '../reducers';

const countryPersistConfig = {
    key: 'country',
    storage,
    whitelist: ['countryInformation'],
};
const detailsPersistConfig = {
    key: 'details',
    storage,
    whitelist: ['detailedData'],
};
const themePersistConfig = {
    key: 'theme',
    storage,
};

export interface IAppState {
    country: AppStore.IState;
    details: AppStore.IDetailsState;
    filter: AppStore.IFilterState;
    theme: AppStore.IThemeState;
}

const rootReducer = combineReducers({
    country: persistReducer(countryPersistConfig, countryReducer),
    details: persistReducer(detailsPersistConfig, detailsReducer),
    filter: filterReducer,
    theme: persistReducer(themePersistConfig,themeReducer),
});

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(ReduxThunk), (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()),
);
export const persistor = persistStore(store);
