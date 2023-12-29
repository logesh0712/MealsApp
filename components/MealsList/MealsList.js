import {View, FlatList, StyleSheet} from 'react-native';

import MealItem from './MealItem';

function MealsList({items})
{
    //Use this method inside the main function of this page, Because later it might be useful for Navigation
    function rendermealItem(itemData)
    {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability,
        }

        return (
            <MealItem {...mealItemProps}></MealItem>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem= {rendermealItem}
            >

            </FlatList>
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
});