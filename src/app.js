"use strict";
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import configureStore from './ducks/configureStore';
import Page from "./components/Page";
const {store, persistor} = configureStore();

render(<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Page />
    </PersistGate>
</Provider>, document.getElementById('app'));