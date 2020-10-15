import React from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Map extends React.Component {
  render() {
      var markers = [
          {
            latitude:  12.841,
            longitude:  80.1538,
            title : "Vit Chennai",
          description :"A place to learn a chance to Grow"
          }
      ]
    return (
      <View style={styles.container}>
        <MapView 
         region={{
            latitude:  12.8406462,
            longitude:  80.1512396,
            latitudeDelta: 0.922,
            longitudeDelta: 0.0021,
          }}
          annotations=  {markers}
          style={styles.mapStyle} >
          <Marker
          coordinate={
            {
                latitude:  12.8406462,
                longitude:  80.1512396
          }}
          title = {"Vit Chennai"}
          description ={"A place to learn a chance to Grow"}
          />
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 400,
  },
});