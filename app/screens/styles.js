import { StyleSheet } from 'react-native'
import color from '../constants/color'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.WHITE
    },
    upperHalf: {
        flex: 0.7,
    },
    lowerHalf: {
        flex: 0.3,
    },
    inputContainer: {
        marginTop: 200,
        marginHorizontal: 25,
        marginBottom: 10
    },
    secInput: {
        marginTop: 20
    },
    loginButton: {
        marginTop: 30
    },
    circle: {
        backgroundColor: color.SILVER,
        marginTop: 200,
        padding: 10,
        width: 120,
        height: 120,
        alignSelf: 'center',
        borderRadius: 60
    },
    circleText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 30,
        fontWeight: '500',
        color:color.BLACK
    },
    header: {
        backgroundColor: color.SILVER,
        padding: 20,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16
    },
    userCircle: {
        backgroundColor: color.SILVER,
        marginTop: 130,
        padding: 10,
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderRadius: 70
    },
    userLogo: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 20,
    },
    userName: {
        textAlign: 'center',
        marginTop: 10,
        color:color.BLACK
    },
    shiftBtn: {
        marginTop: 10
    },
    safeArea: {
        backgroundColor: color.SILVER
    }
})
export default styles