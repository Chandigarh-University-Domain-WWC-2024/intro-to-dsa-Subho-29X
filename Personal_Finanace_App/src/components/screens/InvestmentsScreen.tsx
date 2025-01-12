import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type InvestmentsScreenProps = {
    route: RouteProp<MainStackParamList, "Investments">,
    navigation: FrameNavigationProp<MainStackParamList, "Investments">,
};

export function InvestmentsScreen({ navigation }: InvestmentsScreenProps) {
    const investments = [
        { type: "Stocks", risk: "High", recommended: "10-30%" },
        { type: "Bonds", risk: "Medium", recommended: "20-40%" },
        { type: "Real Estate", risk: "Medium", recommended: "10-20%" },
        { type: "Cash", risk: "Low", recommended: "10-20%" },
    ];

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl font-bold mb-4">Investment Planning</label>
            
            <scrollView className="w-full">
                {investments.map((investment, index) => (
                    <gridLayout key={index} rows="auto, auto" columns="auto, *" className="p-4 border-b border-gray-200">
                        <label row="0" col="0" className="font-bold">{investment.type}</label>
                        <label row="0" col="1" className="text-right">Risk: {investment.risk}</label>
                        <label row="1" col="0" colSpan="2" className="text-gray-600">
                            Recommended allocation: {investment.recommended}
                        </label>
                    </gridLayout>
                ))}
            </scrollView>
            
            <button 
                className="bg-purple-500 text-white p-4 rounded-lg mt-4"
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