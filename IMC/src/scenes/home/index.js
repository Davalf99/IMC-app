import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const HomeScene = ({ navigation }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const IMC = 0
    return (
        <View>
            <Text>HEIGHT(m)</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter your height in meters"
                onChangeText={height => setHeight(height)}
                defaultValue={height}
            />
            <Text>WEIGHT(kg)</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter your weight in kilograms"
                onChangeText={weight => setWeight(weight)}
                defaultValue={weight}
            />
            <Button
                title="Calculate"
                onPress={() => navigation.navigate('Profile',{height, weight})}
            />
            <Text></Text>
        </View>);


}


export default HomeScene;
