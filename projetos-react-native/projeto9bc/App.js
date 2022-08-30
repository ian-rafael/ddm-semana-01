import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Text, View} from 'react-native';
import i18n from './i18n';

const App = () => {
  const {t} = useTranslation();
  const [counter, setCounter] = useState(0);
  const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};
  return (
    <View style={style}>
      <Text style={{fontSize: 24}} onPress={() => setCounter(counter + 1)}>
        {t('helloWorld')}
      </Text>
      <Text>
        {t('clicks')}: {counter}
      </Text>
      <Button onPress={() => i18n.changeLanguage('pt_BR')} title="PORTUGUÊS" />
      <Button onPress={() => i18n.changeLanguage('en_US')} title="ENGLISH" />
    </View>
  );
};

export default App;
