import { Alert, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/button'
import { user } from '../redux/actions'
import styles from './styles'

const Dashboard = () => {
    const dispatch = useDispatch();
    const details = useSelector((state) => state.auth.user)
    const [attendence, setAttendence] = useState(0)

    useEffect(() => {
        dispatch(user(4))
    }, [])

    const clicks = (number, type) => {
        if (type == 'ss' || type == 'es') {
            Alert.alert('Attendence', "Are your sure?", [{
                text: "Yes",
                onPress: () => setAttendence(number)
            }, {
                text: "No",
                style: 'cancel'
            }])
        } else {
            setAttendence(number)
        }
    }

    return (
        <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.safeArea} />
            <View style={styles.upperHalf}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Dashboard</Text>
                </View>
                <Image source={{ uri: details.avatar }} style={styles.userCircle} />
                <Text style={styles.userName}>{details.first_name + " " + details.last_name}</Text>
            </View>
            <View style={styles.lowerHalf}>
                <View style={styles.inputContainer}>
                    {attendence == 0 && <Button text={'Start Shift'} onClick={() => clicks(1, 'ss')} isloader={false} componentStyle={styles.shiftBtn} />}
                    {attendence == 1 && <Button text={'Start Break'} onClick={() => clicks(2, 'sb')} isloader={false} componentStyle={styles.shiftBtn} />}
                    {attendence == 2 && <Button text={'End Break'} onClick={() => clicks(1, 'eb')} isloader={false} componentStyle={styles.shiftBtn} />}
                    {attendence == 1 && <Button text={'End Shift'} onClick={() => clicks(0, 'es')} isloader={false} componentStyle={styles.shiftBtn} />}
                </View>
            </View>
        </ScrollView>
    )
}

export default Dashboard
