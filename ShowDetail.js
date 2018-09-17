'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');

type Props = {};
export default class SearchResults extends Component<Props> {
  static navigationOptions = {
    title: 'Detail',
  };
  render() {
    const { params } = this.props.navigation.state;
    const item = params.item;
    const price = item.price_formatted.split(' ')[0];
    return (
      <View>
        <Image style={styles.lager} source={{ uri: item.img_url }} />
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.title}
          numberOfLines={1}>{item.title}</Text>
        <View style={styles.separator}/>
        <View style={styles.summaryContainer}>
          <Text>{item.summary}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lager: {
    width: win.width,
    height: 300,
    marginTop: 20,
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  summaryContainer: {
    padding: 10,
    backgroundColor: '#f2f6fa',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: '#656565',
    margin: 10,
  },
});