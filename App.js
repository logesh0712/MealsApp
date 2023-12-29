import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import {store} from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


// Add this method pointer to any of Stack.Screen component under NavigationContainer at main method.
// So that DrawerNavigator will be nested inside any other navigator
function DrawerNavigator()
{
  return(
    <Drawer.Navigator 
      screenOptions={{
        headerStyle: {backgroundColor: 'gray'}, // Header 
        headerTintColor: 'white', // Header font color
        // contentStyle in other navigators & sceneContainerStyle for drawer navigator
        //contentStyle: {backgroundColor: '#c8c8cc'}
        sceneContainerStyle: {backgroundColor: '#c8c8cc'},
        drawerContentStyle:{backgroundColor:'#c8c8cc'},
        drawerInactiveTintColor: 'black',
        drawerActiveTintColor: '#c8c8cc',
        drawerActiveBackgroundColor: '#4185f2'
      }}
    >
      <Drawer.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          title: 'All categories',
          drawerIcon:({color, size}) => (
            <Ionicons name="list" color={color} size={size}></Ionicons>
          ),

        }}
      >
      </Drawer.Screen>

      <Drawer.Screen name="Favorites" 
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon:({color, size}) => (
            <Ionicons name="star" color={color} size={size}></Ionicons>
          ),

        }}
      >
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {

  return (
    <>
      <StatusBar style='light'></StatusBar>

      
      {/*
      This is for context based
      <FavoritesContextProvider>*/}

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerStyle: {backgroundColor: 'gray'}, // Header 
              headerTintColor: 'white', // Header font color
              contentStyle: {backgroundColor: '#c8c8cc'}
            }}
          >
            
            
            <Stack.Screen 
              name="DrawerMealsCategories" 
              component={DrawerNavigator}
              options={{
                //title:'All Categories',
                headerShown: false,
                // You can have below settings per page or move those to Stack.Navigator
                //headerStyle: {backgroundColor: 'gray'}, // Header 
                //headerTintColor: 'white', // Header font color
                //contentStyle: {backgroundColor: '#c8c8cc'}
              }}
            ></Stack.Screen>
            
            <Stack.Screen name="MealsOverview" 
              component={MealsOverviewScreen}
              //Dynamic way of setting options
              //options={ ({route, navigation}) =>{
              //  const categoryId = route.params.categoryId;
              //  return {
              //    title : categoryId
              //  }
              //}}
            ></Stack.Screen>

            <Stack.Screen 
              name="MealDetail" 
              component={MealDetailScreen}
              options={{
                title:'About the meal'
              }}
              //Below is the one way to add a button in the header (If this way is choosed, button cannot interact with the same screen. Instead try adding it in the screen itself using useLayoutEffect();)
              //options={{
                //It should be a react component function.
              //  headerRight: () => {
              //    return <Button title="Tap me!" onPress={}></Button>
              //  }
              //}}
            >
            </Stack.Screen>

          </Stack.Navigator>
        </NavigationContainer>

      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
