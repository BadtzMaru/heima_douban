import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './components/tabbars/Home';
import Me from './components/tabbars/Me';
import Search from './components/tabbars/Search';
import ShopCart from './components/tabbars/ShopCart';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Icon name="home" size={25} color="gray" />}
          renderSelectedIcon={() => <Icon name="home" size={25} color="#0079FF" />}
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'search'}
          title="搜索"
          renderIcon={() => <Icon name="search" size={25} color="gray" />}
          renderSelectedIcon={() => <Icon name="search" size={25} color="#0079FF" />}
          onPress={() => this.setState({selectedTab: 'search'})}>
          <Search />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'shopCart'}
          title="购物车"
          renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
          renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079FF" />}
          onPress={() => this.setState({selectedTab: 'shopCart'})}
          badgeText="0">
          <ShopCart />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'me'}
          title="我的"
          renderIcon={() => <Icon name="user-o" size={25} color="gray" />}
          renderSelectedIcon={() => <Icon name="user-o" size={25} color="#0079FF" />}
          onPress={() => this.setState({selectedTab: 'me'})}>
          <Me />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({});
