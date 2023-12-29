import {View, Text, StyleSheet} from 'react-native';

function Subtitle({children})
{
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    //Text cannot include all styling objects. So hence wrap with Text
    subtitleContainer:{
        padding: 6,
        //margin: 4,
        marginHorizontal: 16,
        marginVertical: 4,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    subtitle:{
        color: '#0323a3',
        fontSize: 18,
        fontWeight: 'bold',
        //margin: 4,
        //padding: 6,
        textAlign: 'center',
        
    }
});