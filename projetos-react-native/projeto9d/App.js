import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Sorteio</Text>
    </View>
  );
};

const App = () => {
  const style = {alignItems: 'center'};
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(null);
  const [feedback, setFeedback] = useState(
    'Clique no botão sortear após preencher os campos.',
  );

  const onButtonPress = () => {
    if (!min || !max) {
      setFeedback('Preencha os campos Mín. e Máx.');
    } else {
      const resolvedMin = Math.min(min, max);
      const resolvedMax = Math.max(min, max);
      const r =
        Math.floor(Math.random() * (resolvedMax - resolvedMin + 1)) +
        resolvedMin;
      setFeedback('Número sorteado: ' + r);
    }
  };

  return (
    <View>
      <Header />
      <View style={style}>
        <Text style={styles.text}>Entre com o intervalo</Text>
        <View style={styles.inputView}>
          <TextInput
            keyboardType="numeric"
            value={min}
            onChangeText={setMin}
            placeholder="Mín."
            style={styles.input}
          />
          <TextInput
            keyboardType="numeric"
            value={max}
            onChangeText={setMax}
            placeholder="Máx."
            style={styles.input}
          />
        </View>
        <Button title="Sortear" onPress={onButtonPress} />
        <Text style={styles.feedback}>{feedback}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 22},
  inputView: {flexDirection: 'row'},
  input: {
    flex: 1,
    textAlign: 'center',
    fontSize: 22,
  },
  feedback: {
    padding: 64,
    textAlign: 'center',
    fontSize: 18,
  },
  header: {
    backgroundColor: 'purple',
    padding: 12,
    marginBottom: 12,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
