import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import styles from './styles/styles';

export default function App() {
  const [corDigitada, setCorDigitada] = React.useState('');
  const [imagem, setImagem] = React.useState(require('./assets/img/cores.png'))
  const [mensagem, setMensagem] = React.useState('');

  useEffect(() => {
    document.title = "App de Cores";
  }, []);

  function trocarImagem() {

    const cor = corDigitada.toLowerCase();
    let novaImagem = null;

    if (cor == "azul") {
      novaImagem = require('./assets/img/img01.jpg');
    }
    if (cor == "preto") {
      novaImagem = require('./assets/img/img02.jpg');
    }
    if (cor == "rosa") {
      novaImagem = require('./assets/img/img03.jpg');
    }
    if (cor == "roxo") {
      novaImagem = require('./assets/img/img04.jpg');
    }
    if (cor == "cinza") {
      novaImagem = require('./assets/img/img05.png');
    }
    if (cor == "laranja") {
      novaImagem = require('./assets/img/img06.png');
    }
    if (cor == "marrom") {
      novaImagem = require('./assets/img/img07.png');
    }
    if (cor == "vermelho") {
      novaImagem = require('./assets/img/img08.jpg');
    }
    if (cor == "amarelo") {
      novaImagem = require('./assets/img/img09.jpg');
    }
    if (cor == "verde") {
      novaImagem = require('./assets/img/img10.jpg');
    }

    if (novaImagem) {
      setImagem(novaImagem);
      setMensagem('');
    } else {
      setMensagem("Cor não encontrada. Digite umas das cores disponíveis!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Bem-vindo ao Projeto NodeJs/React Native
      </Text>

      <View style={styles.cont}>

        <Text style={styles.sub}>
          As Cores disponíveis são: Verde, Amarelo, Vermelho, Marrom, Laranja, Cinza, Roxo, Rosa, Preto e Azul
        </Text>

        <Image style={styles.img} source={imagem} />

        <TextInput style={styles.inp}
          onChangeText={(value) => setCorDigitada(value)}
          placeholder="Digite a cor escolhida"
        />
        <Pressable style={styles.pre}
          onPress={() => trocarImagem()}>
          <Text style={styles.txtb}>Procurar</Text>
        </Pressable>
        {
          mensagem ? <Text style={styles.obs}
          >{mensagem}</Text> : null
        }
      </View>

    </View>
  );
}
