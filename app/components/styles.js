import { StyleSheet} from 'react-native'
import color from '../constants/color'

const styles = StyleSheet.create({
    input:{
        backgroundColor:color.GREY,
        padding:13,
        borderRadius:25,
        paddingLeft:20
    },
    button:{
        backgroundColor:color.DARK_GREY,
        padding:13,
        borderRadius:25
    },
    buttonText:{
        color:color.WHITE,
        textAlign:'center',
        fontWeight:'bold'
    }
})
export default styles