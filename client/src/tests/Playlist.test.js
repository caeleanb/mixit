import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyMock from './Mock'
import Playlist from "../components/Playlist";
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

it('renders and calls the api without failing', () => {
    const div = document.createElement('div');
    const store = configureStore();

    ReactDOM.render(
        <Provider store={store}>
            <Playlist api={new SpotifyMock()}/>
        </Provider>,
        div
    );
});
