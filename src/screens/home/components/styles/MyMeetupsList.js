import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$blackBlueColor'
    },
    title:{
     color : '$whiteColor',
     fontSize: 25,
     //fontFamily: '../../../../fonts/Montserrat-Bold.ttf'
    },
    titleContainer:{
       flex: 0.1,
       paddingHorizontal: '2.5%',
       paddingVertical: '2.5%'

    },
    contentContainer:{
       flex: 1
    },
    meetupCard:{
      height: 200,
      width: 175,
      marginHorizontal: 4,
      backgroundColor:'$redColor'
    },
    meetupCardTopContainer:{
      flex: 1,
      position: 'relative'
    },
    meetupCardTitle:{
        position: 'absolute',
        color: '$whiteColor',
        top:'2%',
        left: '2.5%'
    },
    meetupCardBottomContainer:{
        flex:0.4,
        backgroundColor:'$whiteColor',
        justifyContent: 'center',
        paddingHorizontal: '2.5%'
    },
    meetupCardMetaName:{
        fontSize: 15
    },
    meetupCardMetaDate:{
      fontSize: 13
    }

});


export default styles;