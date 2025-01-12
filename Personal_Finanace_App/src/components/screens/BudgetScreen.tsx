import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { Card } from "../common/Card";
import { expenseCategories } from "../../data/expenseCategories";

type BudgetScreenProps = {
    route: RouteProp<MainStackParamList, "Budget">,
    navigation: FrameNavigationProp<MainStackParamList, "Budget">,
};

export function BudgetScreen({ navigation }: BudgetScreenProps) {
    const expenses = [
        { category: "Housing", amount: 1200, percentage: 35 },
        { category: "Food", amount: 400, percentage: 15 },
        { category: "Transport", amount: 200, percentage: 8 },
        { category: "Entertainment", amount: 150, percentage: 5 },
        { category: "Healthcare", amount: 300, percentage: 10 },
        { category: "Shopping", amount: 250, percentage: 7 },
        { category: "Utilities", amount: 180, percentage: 6 },
        { category: "Education", amount: 400, percentage: 14 }
    ];

    return (
        <scrollView>
            <flexboxLayout className="flex-col p-4">
                <Card className="bg-blue-600 mb-4">
                    <label className="text-white text-lg">Monthly Budget</label>
                    <label className="text-white text-3xl font-bold">$3,080</label>
                    <label className="text-blue-200">Spent: $2,150 / Left: $930</label>
                </Card>

                {expenses.map((expense, index) => {
                    const category = expenseCategories.find(cat => cat.name === expense.category);
                    return (
                        <Card key={index} className="mb-2">
                            <gridLayout columns="auto, *, auto" className="items-center">
                                <label col="0" className="text-2xl mr-2">{category?.icon}</label>
                                <stackLayout col="1">
                                    <label className="font-bold">{expense.category}</label>
                                    <flexboxLayout className="w-full h-2 bg-gray-200 rounded-full mt-1">
                                        <stackLayout 
                                            className="h-full rounded-full"
                                            style={{ 
                                                backgroundColor: category?.color,
                                                width: `${expense.percentage}%`
                                            }}
                                        />
                                    </flexboxLayout>
                                </stackLayout>
                                <stackLayout col="2" className="ml-2">
                                    <label className="font-bold">${expense.amount}</label>
                                    <label className="text-gray-500 text-xs">{expense.percentage}%</label>
                                </stackLayout>
                            </gridLayout>
                        </Card>
                    );
                })}
            </flexboxLayout>
        </scrollView>
    );
}