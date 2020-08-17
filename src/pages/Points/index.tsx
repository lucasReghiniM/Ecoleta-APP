import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg'

const Points = () => {
    const navigation = useNavigation();

    function handleNavigateBack(){
        navigation.goBack();
    }

    function handleNavigateToDetail(){
        navigation.navigate('Detail');
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleNavigateBack}>
                    <Feather name={'arrow-left'} color='#34cb79' size={20} />
                </TouchableOpacity>

                <Text style={styles.title}>Bem vindo</Text>
                <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>

                <View style={styles.mapContainer}>
                    <MapView 
                      style={styles.map} 
                      initialRegion={{
                        latitude: -23.6815314,
                        longitude: -46.8755,
                        latitudeDelta: 0.014,
                        longitudeDelta: 0.014, 
                      }}
                    >
                      <Marker
                        style={styles.mapMarker} 
                        onPress={handleNavigateToDetail}
                        coordinate={{
                          latitude: -23.6815314,
                          longitude: -46.8755,
                        }} 
                      >
                        <View style={styles.mapMarkerContainer} > 
                          <Image 
                            source={{ uri: 'https://www.mercadoeconsumo.com.br/wp-content/uploads/2018/07/Carrefour-inaugura-unidade-Market-na-Praia-Grande.jpg'}} 
                            style={styles.mapMarkerImage}
                          />
                          <Text style={styles.mapMarkerTitle} > Mercado </Text>
                        </View>
                      </Marker>
                    </MapView>
                </View>
            </View>

            <View style={styles.itemsContainer}>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 28}}
              > 
                <TouchableOpacity style={styles.item} onPress={() => {}}>
                  <SvgUri width={42} height={42} uri="https://svgur.com/i/Njj.svg" />
                  <Text style={styles.itemTitle}>Óleo</Text>     
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                  <SvgUri width={42} height={42} uri="https://svgur.com/i/NmZ.svg" />
                  <Text style={styles.itemTitle}>Baterias</Text>     
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                  <SvgUri width={42} height={42} uri="https://svgur.com/i/NmB.svg" />
                  <Text style={styles.itemTitle}>Eletrônicos</Text>     
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                  <SvgUri width={42} height={42} uri="https://svgur.com/i/Nm0.svg" />
                  <Text style={styles.itemTitle}>Lâmpadas</Text>     
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                  <SvgUri width={42} height={42} uri="https://svgur.com/i/Nmz.svg" />
                  <Text style={styles.itemTitle}>Orgânicos</Text>     
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => {}}>
                  <SvgUri width={42} height={42} uri="https://svgur.com/i/Nm1.svg" />
                  <Text style={styles.itemTitle}>Papéis/Papelão</Text>     
                </TouchableOpacity>
              </ScrollView>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 50,
      //+ Constants.statusBarHeight
      //StatusBar.currentHeight
    },
  
    title: {
      fontSize: 20,
      fontFamily: 'Ubuntu-Bold',
      marginTop: 24,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 4,
      fontFamily: 'Roboto-Regular',
    },
  
    mapContainer: {
      flex: 1,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 16,
    },
  
    map: {
      width: '100%',
      height: '100%',
    },
  
    mapMarker: {
      width: 90,
      height: 80, 
    },
  
    mapMarkerContainer: {
      width: 90,
      height: 70,
      backgroundColor: '#34CB79',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center'
    },
  
    mapMarkerImage: {
      width: 90,
      height: 45,
      resizeMode: 'cover',
    },
  
    mapMarkerTitle: {
      flex: 1,
      fontFamily: 'Roboto-Medium',
      color: '#FFF',
      fontSize: 13,
      lineHeight: 23,
    },
  
    itemsContainer: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 32,
    },
  
    item: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#eee',
      height: 120,
      width: 120,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
  
      textAlign: 'center',
    },
  
    selectedItem: {
      borderColor: '#34CB79',
      borderWidth: 2,
    },
  
    itemTitle: {
      fontFamily: 'Roboto-Regular',
      textAlign: 'center',
      fontSize: 13,
    },
  });

export default Points;

