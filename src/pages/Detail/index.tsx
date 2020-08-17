import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Detail = () => {
    const navigation = useNavigation();

    function handleNavigateBack(){
        navigation.goBack();
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Feather name={'arrow-left'} color='#34cb79' size={20} />
                </TouchableOpacity>

                <Image 
                    style={styles.pointImage} 
                    source= {{ uri: 'https://www.mercadoeconsumo.com.br/wp-content/uploads/2018/07/Carrefour-inaugura-unidade-Market-na-Praia-Grande.jpg'}} 
                />

                <Text style={styles.pointName} > Mercado extra </Text>
                <Text style={styles.pointItems}>Óleo de cozinha, pilhas </Text>

                <View style={styles.address} >
                    <Text style={styles.addressTitle} > Endereço</Text>
                    <Text style={styles.addressContent} > São paulo /SP </Text>
                </View>
            </View>

            <View style={styles.footer} >
                <RectButton style={styles.button} onPress={() => {}} >
                    <FontAwesome name={'whatsapp'} color='#fff' size={30} />
                    <Text style={styles.buttonText} >Whatsapp</Text>
                </RectButton>
                <RectButton style={styles.button} onPress={() => {}} >
                    <Feather name={'mail'} color='#fff' size={30} />
                    <Text style={styles.buttonText} >Email</Text>
                </RectButton>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      paddingTop: 50,
    },
  
    pointImage: {
      width: '100%',
      height: 120,
      resizeMode: 'cover',
      borderRadius: 10,
      marginTop: 32,
    },
  
    pointName: {
      color: '#322153',
      fontSize: 28,
      fontFamily: 'Ubuntu-Bold',
      marginTop: 24,
    },
  
    pointItems: {
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    address: {
      marginTop: 32,
    },
    
    addressTitle: {
      color: '#322153',
      fontFamily: 'Roboto-Medium',
      fontSize: 16,
    },
  
    addressContent: {
      fontFamily: 'Roboto-Regular',
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    footer: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#999',
      paddingVertical: 20,
      paddingHorizontal: 32,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    button: {
      width: '48%',
      backgroundColor: '#34CB79',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      marginLeft: 8,
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Roboto-Medium',
    },
  });

export default Detail;