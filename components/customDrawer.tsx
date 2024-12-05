import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import { router, usePathname } from 'expo-router';
  import React from 'react'
  import Drawer from 'expo-router/drawer';
  import {
    View,
    Text,
    Button,
    Pressable,
    StyleSheet,
    BackHandler,
    Dimensions,
  } from 'react-native';
  import {
    SafeAreaInsetsContext,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
  import {
    Entypo,
    Feather,
    Ionicons,
    MaterialCommunityIcons,
    Octicons,
  } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
  
  const { width, height } = Dimensions.get('window');
  
  const isTablet = width >= 768 && height >= 1024;
  
  export default function CustomDrawerContent(props: any) {
    const [dataF, setDataF] = useState<any>();
    const noAuth = ['(edition)', '(editionwords)', '(auth)', '(viewsugesstion)'];
    const [labelLogout, setLabel] = useState<string | null>('');
    const [viwerRoute, setViwerRoute] = useState<boolean | null>(false);
  ;
    const path = usePathname();
    useEffect(() => {
      console.log(path);

    }, [path]);

  
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props} style={{ marginTop: -15 }}>
          <DrawerItem
            label={'Dólar Americano'}

            onPress={() => router.push('/')}
            style={{
              backgroundColor: path == '/' ? '#aecdfb' : '#edf8f4',
              marginTop: 10,
            }}
            labelStyle={{
              color: path == '/' ? '#3b82eb' : 'gray',
              fontSize: 18,
              fontWeight: '500',
              marginLeft: 5,
            }}
          ></DrawerItem>
          <DrawerItem
            label={'Euro'}
            onPress={() => router.push('/Euro')}
            style={{
              backgroundColor: path == '/euro' ? '#aecdfb' : '#edf8f4',
              marginTop: 10,
            }}
            labelStyle={{
              color: path == '/euro' ? '#3b82eb' : 'gray',
              fontSize: 18,
              fontWeight: '500',
              marginLeft: 5,
            }}
          ></DrawerItem>
        </DrawerContentScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: 'blue',
      flexDirection: 'row',
    },
    borda: {
      width: '80%',
      alignSelf: 'center',
      borderTopWidth: 1,
    },
    text: {
      fontWeight: '700',
      color: '#1c1c1ead',
      marginLeft: 5,
    },
  });
  