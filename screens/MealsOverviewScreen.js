import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS, CATEGORIES } from '../data/dummy-data';


/*
Instead of getting {route} in parameter,
you can also import this "import {useRoute} from '@react-navigation/native'"
and use like this -> "const route = useRoute();"
*/

// route and navigation components can be used here since this component is registered as a screen.
// And screen components get route and navigation automatically by react navigators.
function MealsOverviewScreen({ route, navigation })
{
    const categoryIdInput = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryIdInput) >= 0;
    });


    // useEffect will execute code inside the method after the component is loaded for the first time.
    // So there will be a delay. That is, components are loaded and title is set.
    // So, Instead of using useEffect, useLayoutEffect can be used.
    // So, below code should be replaced with useLayoutEffect
    //useEffect(() =>{
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category)=> category.id === categoryIdInput).title;

        // Below code works without useEffect also. But will get a warning. Instead useEffect should be used
        navigation.setOptions({
            title : categoryTitle
        });

    }, [categoryIdInput, navigation]);

    
    return (
        <MealsList
            items={displayedMeals}
        >
        </MealsList>
    );
}

export default MealsOverviewScreen;

