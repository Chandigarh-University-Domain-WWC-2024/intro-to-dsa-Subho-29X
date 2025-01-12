import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { Card } from "../common/Card";
import { ExpenseChart } from "../common/ExpenseChart";
import { expenseCategories } from "../../data/expenseCategories";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const monthlyExpenses = [
        { category: "Housing", amount: 1200, color: "#4F46E5" },
        { category: "Food", amount: 400, color: "#10B981" },
        { category: "Transport", amount: 200, color: "#F59E0B" },
        { category: "Others", amount: 300, color: "#6366F1" }
    ];

    return (
        <scrollView>
            <flexboxLayout className="flex-col p-4">
                {/* Balance Card */}
                <Card className="bg-indigo-600">
                    <label className="text-white text-sm">Total Balance</label>
                    <label className="text-white text-3xl font-bold">$5,240.00</label>
                    <label className="text-indigo-200 text-sm">+$850 this month</label>
                </Card>

                {/* Quick Actions */}
                <gridLayout columns="*, *, *" className="mt-4">
                    <Card className="col-0">
                        <label className="text-2xl mb-2">💸</label>
                        <label className="text-sm">Send</label>
                    </Card>
                    <Card className="col-1">
                        <label className="text-2xl mb-2">📊</label>
                        <label className="text-sm">Analytics</label>
                    </Card>
                    <Card className="col-2">
                        <label className="text-2xl mb-2">💳</label>
                        <label className="text-sm">Cards</label>
                    </Card>
                </gridLayout>

                {/* Monthly Overview */}
                <Card className="mt-4">
                    <label className="text-lg font-bold mb-4">Monthly Overview</label>
                    <ExpenseChart data={monthlyExpenses} />
                </Card>

                {/* Quick Access */}
                <gridLayout rows="auto, auto" columns="*, *" className="mt-4 gap-2">
                    <button 
                        className="bg-blue-500 text-white p-4 rounded-xl"
                        row="0" col="0"
                        onTap={() => navigation.navigate("Budget")}
                    >
                        📊 Budget
                    </button>
                    
                    <button 
                        className="bg-green-500 text-white p-4 rounded-xl"
                        row="0" col="1"
                        onTap={() => navigation.navigate("Savings")}
                    >
                        💰 Savings
                    </button>
                    
                    <button 
                        className="bg-purple-500 text-white p-4 rounded-xl"
                        row="1" col="0"
                        onTap={() => navigation.navigate("Investments")}
                    >
                        📈 Investments
                    </button>
                    
                    <button 
                        className="bg-orange-500 text-white p-4 rounded-xl"
                        row="1" col="1"
                        onTap={() => navigation.navigate("Goals")}
                    >
                        🎯 Goals
                    </button>
                </gridLayout>
            </flexboxLayout>
        </scrollView>
    );
}