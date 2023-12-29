import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile'


function CategoriesScreen({navigation}){
    // navigation cannot be used in child areas.
    // so instead of defining renderCategoryItem outside CategoriesScreen, define it inside the same function in order to access navigation component.
    function renderCategoryItem(itemData)
    {
        function onPressHandler()
        {
            navigation.navigate(
                'MealsOverview', /*Name of the page which it wants to navigate*/
                {
                    categoryId : itemData.item.id
                }
            );
        }
    
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={onPressHandler}
            >
    
            </CategoryGridTile>
        );
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        >
        </FlatList>
    );
}

export default CategoriesScreen;