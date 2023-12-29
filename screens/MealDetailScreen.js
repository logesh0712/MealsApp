////context based: useContext --> For using context based instead of Redux
import { useContext, useLayoutEffect } from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

import {MEALS} from '../data/dummy-data'
import IconButton from '../components/IconButton';
import { addFavorite, removeFavorite} from '../store/redux/favorites';
//import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation })
{
    //context based
    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler()
    {
        if (mealIsFavorite)
        {
            //favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        }
        else
        {
            //favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                //return <Button title="Tap Me!" onPress={changeFavoriteStatusHandler}> </Button>
                return (
                    <IconButton 
                        icon={mealIsFavorite ? 'star' : 'star-outline'} 
                        color={'white'} 
                        onPress={changeFavoriteStatusHandler}
                    > 
                    </IconButton>
                );
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            {/* Image fetched from net should have size. Else react native does not know the size of the image */}
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}></Image>
            <Text style={styles.title}>{selectedMeal.title}</Text>

            <MealDetails 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            ></MealDetails>

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}></List>

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}></List>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width: '100%',
        height: 350
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#0323a3'
    },
    detailText:{
        color: '#0a38f0'
    },
    listOuterContainer:{
        alignItems: 'center'
    },
    listContainer:{
        width:'80%'
    }
});