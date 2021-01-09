import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList, Image, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      nowPage: 1,
      totalPage: 0,
      pageSize: 8,
      isLoading: true,
    };
  }
  componentDidMount() {
    this.getMoviesByPage();
  }
  getMoviesByPage = () => {
    this.setState({
      totalPage: 2,
      movies: [
        {
          rate: '7.2',
          cover_x: 5800,
          title: '阳光之下',
          cover: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2629201217.webp',
          id: '30217666',
          cover_y: 8120,
        },
        {
          rate: '6.7',
          cover_x: 2211,
          title: '巡回检察组',
          cover: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2628306506.webp',
          id: '30317700',
          cover_y: 3543,
        },
        {
          rate: '7.8',
          cover_x: 1215,
          title: '甜蜜家园',
          cover: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2628425414.webp',
          id: '34858078',
          cover_y: 1800,
        },
        {
          rate: '7.2',
          cover_x: 2480,
          title: '流金岁月',
          cover: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2629861450.webp',
          id: '30122638',
          cover_y: 3644,
        },
        {
          rate: '9.2',
          cover_x: 2082,
          title: '大江大河2',
          cover: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2628760333.webp',
          id: '30423905',
          cover_y: 3000,
        },
        {
          rate: '8.8',
          cover_x: 710,
          title: '天地创造设计部',
          cover: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2623386047.webp',
          id: '35048149',
          cover_y: 1000,
        },
        {
          rate: '9.5',
          cover_x: 728,
          title: '动物狂想曲 第二季',
          cover: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2622334545.webp',
          id: '34937800',
          cover_y: 1024,
        },
        {
          rate: '7.7',
          cover_x: 1080,
          title: '终极笔记',
          cover: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2628058192.webp',
          id: '34794707',
          cover_y: 1920,
        },
      ],
      isLoading: false,
    });
  };
  renderList() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="cyan" />;
    }
    return (
      <FlatList
        data={this.state.movies}
        keyExtractor={(item, i) => '' + i}
        renderItem={({item}) => this.renderItem(item)}
        ItemSeparatorComponent={this.renderSeparator} // 渲染分割线
        onEndReachedThreshold={0.5} // 距离底部还有多远的时候出发加载更多的事件
        onEndReached={this.loadNextPage}
      />
    );
  }
  loadNextPage = () => {
    if (this.state.nowPage + 1 > this.state.totalPage) return;
    this.setState({
      nowPage: this.state.nowPage + 1,
      movies: [
        ...this.state.movies,
        ...[
          {
            rate: '9.0',
            cover_x: 1500,
            title: '后翼弃兵',
            cover: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2621201524.webp',
            id: '32579283',
            cover_y: 2222,
          },
          {
            rate: '9.4',
            cover_x: 597,
            title: '约定的梦幻岛 第二季',
            cover: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2627528391.webp',
            id: '33387151',
            cover_y: 865,
          },
          {
            rate: '8.0',
            cover_x: 1500,
            title: '弥留之国的爱丽丝 第一季',
            cover: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2624050592.webp',
            id: '34477588',
            cover_y: 2224,
          },
          {
            rate: '9.2',
            cover_x: 2892,
            title: '咒术回战',
            cover: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2620216005.webp',
            id: '34895145',
            cover_y: 4096,
          },
          {
            rate: '6.4',
            cover_x: 1390,
            title: '顶楼',
            cover: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2623361633.webp',
            id: '34937895',
            cover_y: 1981,
          },
          {
            rate: '7.4',
            cover_x: 1968,
            title: '奇葩说 第七季',
            cover: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2628788237.webp',
            id: '35070344',
            cover_y: 3500,
          },
          {
            rate: '7.6',
            cover_x: 1446,
            title: '女神降临',
            cover: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2625047687.webp',
            id: '35049265',
            cover_y: 2048,
          },
          {
            rate: '9.8',
            cover_x: 1770,
            title: '进击的巨人 第四季',
            cover: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2605274206.webp',
            id: '33440021',
            cover_y: 2500,
          },
        ],
      ],
    });
  };
  renderSeparator = () => {
    return (
      <View style={{borderBottomWidth: 1, borderColor: '#ccc', marginLeft: 10, marginRight: 10}} />
    );
  };
  renderItem = (item) => {
    return (
      <TouchableHighlight underlayColor="cyan" onPress={() => Actions.movieDetail({item})}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Image source={{uri: item.cover}} style={{width: 100, height: 100, marginRight: 10}} />
          <View style={{justifyContent: 'space-around'}}>
            <Text>
              <Text>电影名称: </Text>
              {item.title}
            </Text>
            <Text>
              <Text>ID: </Text>
              {item.id}
            </Text>
            <Text>
              <Text>制作年份: </Text>
              {item.cover_x}
            </Text>
            <Text>
              <Text>豆瓣评分: </Text>
              {item.rate}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    return <View>{this.renderList()}</View>;
  }
}

export default MovieList;
