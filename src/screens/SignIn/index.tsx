import React, { useState } from 'react';
import { Text, View,TextInput } from 'react-native';

import {styles} from './styles';
//aplicação passa por aqui para startar 

export function SignIn() { //sempre tera esta função e a mesma precisa retornar um componente
    const [text,setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      // onChangeText={(value) => setText(value)} pega o valor que esta digitando
      onChangeText={setText}
      />
      <Text>
          Você digitou........{ text }
      </Text>
    </View>
  );
}
//definir estrutura da interface