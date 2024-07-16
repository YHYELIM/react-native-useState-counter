import React from 'react';
import {View, Text} from 'react-native';
import App from '../App';

function Greeting(props) {
  return (
    <>
      <View>
        {/* 전달받은 props.name 값을 사용해서 text 동적으로 바꿈  */}
        <Text>안녕하세요 {props.name}!</Text>
      </View>
    </>
  );
}

Greeting.defaultProps = {
  name: '리액트 네이티브',
};

export default Greeting;
