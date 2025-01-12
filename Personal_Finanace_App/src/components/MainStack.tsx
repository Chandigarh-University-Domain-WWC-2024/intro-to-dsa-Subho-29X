import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { BudgetScreen } from "./screens/BudgetScreen";
import { SavingsScreen } from "./screens/SavingsScreen";
import { InvestmentsScreen } from "./screens/InvestmentsScreen";
import { GoalsScreen } from "./screens/GoalsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4F46E5",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Finance Assistant" }}
            />
            <StackNavigator.Screen
                name="Budget"
                component={BudgetScreen}
                options={{ title: "Budget Insights" }}
            />
            <StackNavigator.Screen
                name="Savings"
                component={SavingsScreen}
                options={{ title: "Savings Tips" }}
            />
            <StackNavigator.Screen
                name="Investments"
                component={InvestmentsScreen}
                options={{ title: "Investment Planning" }}
            />
            <StackNavigator.Screen
                name="Goals"
                component={GoalsScreen}
                options={{ title: "Financial Goals" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);