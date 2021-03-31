import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft:20,
        paddingRight:20,
        
      },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
       
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop:  -12,
        paddingLeft: 10,
        color: 'black',
        
    },
    submitButton : {
        marginTop:25,
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#48CCCD',
        borderRadius:10,
        opacity:1
    },
    header : {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
});