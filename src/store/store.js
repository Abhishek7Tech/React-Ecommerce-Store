import { compose,createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//Alternate To thunk and much more complex Redux-Sage//
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
//root reducer//


import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
    
    if(!action.type)
    {
        return next(action);
    }

    console.log("type: " , action.type );
    console.log("payload: " , action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("currentState: ", store.getState());
}

const persistConfig = {
    key: "root",
    storage,
    blaclist:["user"]
}

//REDUX_SAGA
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWare = [process.env.NODE_ENV === "development"  && loggerMiddleware,thunk].filter(Boolean);
// const middleWare = [process.env.NODE_ENV === "development"  && loggerMiddleware, sagaMiddleware].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWare));

//RUN REDUX_SAGA//
// sagaMiddleware.run(rootSaga);

export const store = createStore(persistedReducer,undefined,composedEnhancers);

export const persistor = persistStore(store);