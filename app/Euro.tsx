import { Keyboard, Pressable, StyleSheet, TextInput } from 'react-native';
import React, { useRef } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import apiAxios from '@/components/axiosApi';
import { CurrencyData } from '@/@types/typeCurrentData';
import { Image } from 'expo-image';
import euro from '@/assets/images/euro.png';

export default function TabOneScreen() {
  const [coinData, setCoinData] = useState<CurrencyData[]>();
  const [error, setError] = useState('');

  async function fetchPriceCoin() {
    const response = await apiAxios.get(`EUR-BRL/1`);
    console.log(response.data);
    if (response.status == 200) {
      return setCoinData(response.data);
    }
    setError('Não foi possivel encontrar os dados da moeda');
    setTimeout(() => setError(''), 4000);
  }

  useEffect(() => {
    fetchPriceCoin();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#00000000',
          width: 250,
          height: 230,
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <Image style={styles.image} source={euro} transition={1000} />
      </View>

      <View style={{ backgroundColor: 'whites', marginTop: 30 }}>
        <Text style={styles.labelData1}>O Euro está:</Text>
      </View>
      <View style={{ backgroundColor: 'whites', marginTop: 30 }}>
        <Text style={styles.labelData}>
          R$ {coinData && parseFloat(coinData[0].ask).toFixed(2)}{' '}
        </Text>
      </View>

      <View style={styles.divButtons}>
        <Pressable
          style={styles.buttom}
          onPress={() => {
            fetchPriceCoin();
          }}
        >
          <Text style={{ color: 'black', fontWeight: 400, fontSize: 20 }}>
            Atualizar
          </Text>
        </Pressable>
      </View>

      {error ? (
        <Text
          style={{
            color: 'red',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 15,
            fontSize: 17,
          }}
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#0b1c2c',
  },
  divButtons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0b1c2c',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  title: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'gray',
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    fontSize: 18,
    width: '90%',
    color: 'black',
  },
  input: {
    paddingLeft: 15,
    marginTop: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
    fontSize: 17,
    paddingVertical: 9,
  },
  labelData: {
    fontSize: 56,
    color: 'white',
  },
  labelData1: {
    fontSize: 24,
    marginTop: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  labelMain: {
    fontSize: 22,
    marginTop: 18,
    backgroundColor: 'white',
    color: 'black',
  },
  labelError: {
    fontSize: 18,
    marginTop: 18,
    color: 'red',
  },
  buttom: {
    marginTop: 25,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#c7ed63',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttom2: {
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
});
