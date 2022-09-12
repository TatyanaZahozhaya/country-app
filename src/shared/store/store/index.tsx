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
import { countryReducer, themeReducer, filterReducer } from '../reducers';

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['country', 'theme'],
};

export interface IAppState {
    country: AppStore.IState;
    filter: AppStore.IFilterState;
    theme: AppStore.IThemeState;
}

const rootReducer = combineReducers({
    country: countryReducer,
    filter: filterReducer,
    theme: themeReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    compose(applyMiddleware(ReduxThunk), (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()),
);
export const persistor = persistStore(store);
