import React from 'react';
import { Text } from 'react-native';

const ProfileScene = ({route}) => {
    const { height } = route.params;
    const { weight } = route.params;
  return (  
    <>
      <Text>ICM: {weight/(height*height)}</Text>
    </>
  );
}
 
export default ProfileScene;