import React, {useState} from 'react'; //useState 추가
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  // 기본값으로 숫자 0
  const [count, setCount] = useState(0);
  // 값을 변경하는 함수 만듬
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <SafeAreaView style={styles.full}>
      {/* Counter 컴포넌트에 props 로 전달  */}
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1, // 영역 모두 차지
  },
});

export default App;
