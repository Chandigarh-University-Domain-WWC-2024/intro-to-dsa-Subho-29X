import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type SavingsScreenProps = {
    route: RouteProp<MainStackParamList, "Savings">,
    navigation: FrameNavigationProp<MainStackParamList, "Savings">,
};

export function SavingsScreen({ navigation }: SavingsScreenProps) {
    const savingsTips = [
        "Set up automatic savings transfers",
        "Cut unnecessary subscriptions",
        "Use the 50/30/20 budget rule",
        "Track your daily expenses",
    ];

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl font-bold mb-4">Savings Tips</label>
            
            <scrollView className="w-full">
                {savingsTips.map((tip, index) => (
                    <label key={index} className="p-4 border-b border-gray-200 text-lg">
                        {index + 1}. {tip}
                    </label>
                ))}
            </scrollView>
            
            <button 
                className="bg-green-500 text-white p-4 rounded-lg mt-4"
                onTap={() => navigation.goBack()}
            >
                Back to Home
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        padding: 20,
    },
});