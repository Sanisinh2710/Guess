import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props: any) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: 'purple',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
});
export default Header;
