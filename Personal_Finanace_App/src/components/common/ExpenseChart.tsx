import * as React from "react";
import { StyleSheet } from "react-nativescript";

type ExpenseData = {
    category: string;
    amount: number;
    color: string;
};

export function ExpenseChart({ data }: { data: ExpenseData[] }) {
    const total = data.reduce((sum, item) => sum + item.amount, 0);

    return (
        <gridLayout rows="auto, auto" className="w-full">
            <flexboxLayout row="0" className="h-4 w-full rounded-full overflow-hidden">
                {data.map((item, index) => (
                    <stackLayout 
                        key={index}
                        className="h-full"
                        style={{ 
                            backgroundColor: item.color,
                            width: `${(item.amount / total) * 100}%`
                        }}
                    />
                ))}
            </flexboxLayout>
            <flexboxLayout row="1" className="justify-between mt-2">
                {data.map((item, index) => (
                    <label 
                        key={index}
                        className="text-xs"
                        style={{ color: item.color }}
                    >
                        {item.category}
                    </label>
                ))}
            </flexboxLayout>
        </gridLayout>
    );
}