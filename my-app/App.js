import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function InstaGitHubCard({ githubuser }){
  const [liked, setLikeState] = useState(false);

  return (
    <View>
      {/*Insta card header*/}
      <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
        <Image 
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20
          }}

          source={{
            uri: `https://github.com/${githubuser}.png`
          }}/>
          <Text>{githubuser}</Text>
      </View>
      {/*Insta card header*/}
      {/*Insta card image*/}
      <Image 
        style={{
          width: '100%',
          height: 350,
        }}

        source={{
          uri: `https://github.com/${githubuser}.png`
        }}/>
        <StatusBar style="auto" />
      {/*Insta card image*/}
      {/*Insta card footer*/}
      <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setLikeState(!liked)}>
          {liked && <AntDesign name="heart" size={24} color="red" />}
          {!liked && <AntDesign name="hearto" size={24} color="black" />}
        </TouchableOpacity>
        
      </View>
      {/*Insta card footer*/}
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView> 
         {['SageScroll18144', 'MarcosEALima', 'weltonfelix', 'emersontop', 'gabrielvasconcelos', 'einsteingustavo', 'AntonioSilva584', 'Mauro-Jorge'].map((githubuser) => (<InstaGitHubCard key = {githubuser} githubuser = {githubuser}/>   ))}
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
