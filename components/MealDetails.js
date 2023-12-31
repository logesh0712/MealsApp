import {View, Text, StyleSheet} from 'react-native';

function MealDetails({duration, complexity, affordability, style, textStyle})
{
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    // To keep things in a row
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // content to center
        padding: 8
    },
    // Giving space between 2 items in a row
    detailItem:{ 
        marginHorizontal: 4,
        fontSize: 12
    },
});