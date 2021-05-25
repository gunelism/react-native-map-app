import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform
} from 'react-native';
import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';

export default class HeatMap extends Component {

  static navigationOptions = {
    title: 'Tartu',
  };

  state = {
    initialPosition: {
      latitude: 40.7143,
      longitude: -74.0042,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    }
  }

  points = [
    { latitude: 40.7828, longitude: -74.0065, weight: 1 },
    { latitude: 41.7121, longitude: -74.0042, weight: 1 }
  ];

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => this._map = map}
          style={styles.map}
          initialRegion={this.state.initialPosition}>
          <Heatmap
            points={this.points}
            radius={40}
            opacity={1}
            gradient={{
              colors: ["black", "purple", "red", "orange", "white"],
              startPoints: Platform.OS === 'ios' ? [0.01, 0.04, 0.1, 0.45, 0.5] :
                [0.1, 0.25, 0.5, 0.75, 1],
              colorMapSize: 2000
            }}
          >
          </Heatmap>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});