import {StyleSheet, Pressable, View, Text, Platform} from 'react-native';

function CategoryGridTile({title, color, onPress})
{
    return (
        <View style={styles.tileOuterContainer}>
            <Pressable 
                android_ripple={{color:'#ccc'}} 
                style={({pressed}) => [
                    styles.button, 
                    pressed? styles.buttonPressed: null
                    ]}
                onPress={ onPress}
            >
                <View style={[styles.tileInnerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View> 
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    tileOuterContainer:{
        flex:1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        overflow: Platform.OS==='android' ? 'hidden' : 'visible',
        elevation: 4,
        //We need background colour for below 3 property to work.
        shadowColor: 'black', // iphone property
        shadowOffset: {width: 0, height: 2}, // iphone property
        shadowRadius: 0.25, // iphone property
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity: 0.5
    },
    tileInnerContainer:{
        flex:1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        
        //marginTop: 40,
        //marginHorizontal: 20,
        borderRadius: 10,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    }
});