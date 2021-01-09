import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import Swiper from 'react-native-swiper';
// Actions 表示要进行路由的JS操作
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lunbotu: [],
    };
  }
  componentDidMount() {
    this.setState({
      lunbotu: [
        {
          image:
            'https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=09cb63836d09c93d07f20effaf3ff8bb/43e5b1d12f2eb9385b8c537fdf628535e4dd6f58.jpg',
        },
        {
          image:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=711274170,787886715&fm=26&gp=0.jpg',
		},
		{
			image:
			  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=335669401,1872365643&fm=26&gp=0.jpg',
		  },
      ],
    });
  }
  goMovieList = () => {
    Actions.movieList({id: 10});
  };
  render() {
    return (
      <View>
        <View style={{height: 300}}>
          <Swiper showsButtons={true} autoplay={true} loop={true}>
            {this.state.lunbotu.map((item, i) => (
              <View key={i}>
                <Image source={{uri: item.image}} style={{width: '100%', height: '100%'}} />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={styles.box}>
            <Image source={require('../../images/avatar1.jpeg')} style={{width: 60, height: 60}} />
            <Text>新闻资讯</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../images/avatar2.jpeg')} style={{width: 60, height: 60}} />
            <Text>图片分享</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../images/avatar3.jpeg')} style={{width: 60, height: 60}} />
            <Text>商品购买</Text>
          </View>
          <View style={styles.box}>
            <Image source={require('../../images/avatar4.jpeg')} style={{width: 60, height: 60}} />
            <Text>视频专区</Text>
          </View>
          <TouchableHighlight style={styles.box} onPress={this.goMovieList} underlayColor="cyan">
            <View>
              <Image
                source={require('../../images/avatar5.jpeg')}
                style={{width: 60, height: 60}}
              />
              <Text>热映电影</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.box}>
            <Image source={require('../../images/avatar6.jpeg')} style={{width: 60, height: 60}} />
            <Text>联系我们</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: '33.33%',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default Home;
