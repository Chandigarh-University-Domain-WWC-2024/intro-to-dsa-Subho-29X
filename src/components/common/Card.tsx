import * as React from "react";
import { StyleSheet } from "react-nativescript";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export function Card({ children, className = "" }: CardProps) {
    return (
        <stackLayout className={`bg-white rounded-xl shadow-md p-4 m-2 ${className}`}>
            {children}
        </stackLayout>
    );
}