import { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MealsList from '../components/MealsList/MealsList';
//import { FavoritesContext } from '../store/context/favorites-context';
import {MEALS} from '../data/dummy-data';
import { useSelector } from 'react-redux';

function FavoritesScreen()
{
    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state)=> state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) => 
        //favoriteMealsCtx.ids.includes(meal.id)
        favoriteMealIds.includes(meal.id)
    );

    if(favoriteMeals.length === 0)
    {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return (
        <MealsList
            items={favoriteMeals}
        >
        </MealsList>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1, // Take all the space which you can get!!
        justifyContent: 'center', //center the content vertically
        alignItems: 'center' // center the content horizontically
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});