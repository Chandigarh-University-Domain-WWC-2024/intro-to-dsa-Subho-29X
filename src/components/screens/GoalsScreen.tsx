import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type GoalsScreenProps = {
    route: RouteProp<MainStackParamList, "Goals">,
    navigation: FrameNavigationProp<MainStackParamList, "Goals">,
};

export function GoalsScreen({ navigation }: GoalsScreenProps) {
    const goals = [
        { name: "Emergency Fund", target: 10000, current: 5000 },
        { name: "New Car", target: 25000, current: 15000 },
        { name: "Vacation", target: 5000, current: 2000 },
    ];

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl font-bold mb-4">Financial Goals</label>
            
            <scrollView className="w-full">
                {goals.map((goal, index) => (
                    <stackLayout key={index} className="p-4 border-b border-gray-200">
                        <label className="text-lg font-bold">{goal.name}</label>
                        <progress value={goal.current} maxValue={goal.target} className="w-full h-2 bg-gray-200" />
                        <label className="text-right text-gray-600">
                            ${goal.current} / ${goal.target}
                        </label>
                    </stackLayout>
                ))}
            </scrollView>
            
            <button 
                className="bg-orange-500 text-white p-4 rounded-lg mt-4"
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