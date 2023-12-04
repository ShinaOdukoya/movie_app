import { View, Text, StyleSheet, StatusBar, ScrollView, Image } from 'react-native'
import {responsiveHeight} from 'react-native-responsive-dimensions';
import React,{useState} from 'react'

const VideoPlayer = ({route}) => {

  const {title, release_date, poster_path, overview, backdrop_path, vote_count}=route.params.movieData

  const [isVideoVisible, setIsVideoVisible] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#080508'}/>
      <ScrollView style={styles.scrollContainer}>
        {isVideoVisible? null : <Image style={styles.firstContainer} source={{
          uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
        }}/>}

        <View style={styles.secondContainer}>
          <Text style={{color:'white'}}>{title}</Text>
        </View>



      </ScrollView>
    </View>
  )
}

export default VideoPlayer


const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#080508',
    marginTop: StatusBar.currentHeight
  },
  scrollContainer:{
    flex: 1,
  },
  firstContainer:{
    height:responsiveHeight(35)
  },
  secondContainer:{
    padding: 10,
    backgroundColor: '#080508',
  },
})