import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import APP from './App';
import MovieList from './components/movie/MovieList';
import MovieDetail from './components/movie/MovieDetail';

class Main extends Component {
  render() {
    return (
      <Router sceneStyle={{backgroundColor: 'white'}}>
        <Stack key="root">
          <Scene key="app" component={APP} hideNavBar={true} />
          <Scene key="movieList" component={MovieList} title="热映电影列表" />
          <Scene key="movieDetail" component={MovieDetail} title="电影详情" />
        </Stack>
      </Router>
    );
  }
}

export default Main;
