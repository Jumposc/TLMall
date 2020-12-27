import React from 'react';
import { Link } from 'react-router-dom';
import './HomeView.less';

export interface HomeViewProps extends React.Props<any> {

}

export interface HomeViewState {

}

export default class HomeView extends React.Component<HomeViewProps, HomeViewState>{

    state: HomeViewState = {

    };

    render() {
        return <div className='HomeView'>

        </div>
    }
}