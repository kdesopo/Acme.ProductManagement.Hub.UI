import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type ProductsAddedByTimeIntervalBarChartProps = {
    products: Product[] | undefined;
};

type BarChartData = {
    timeInterval: string;
    productCount: number;
};

export function ProductsAddedByTimeIntervalBarChart({ products }: ProductsAddedByTimeIntervalBarChartProps) {
    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);

    useEffect(() => {
        if (products) {
            const productsSortedByDateAdded = products.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
            setBarChartData(getProductsAddedByTimeInterval(productsSortedByDateAdded));
        }
    }, [products]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
                <XAxis dataKey="timeInterval" />
                <YAxis dataKey="productCount" />
                <Bar dataKey="productCount" fill="#8884d8" />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    );
}

function getProductsAddedByTimeInterval(products: Product[]): BarChartData[] {
    const productsAddedByTimeInterval: BarChartData[] = [
        { timeInterval: "This Week", productCount: 0 },
        { timeInterval: "This Month", productCount: 0 },
        { timeInterval: "This Year", productCount: 0 },
        { timeInterval: "This Decade", productCount: 0 },
        { timeInterval: "All Time", productCount: 0 }
    ];

    for (const product of products) {
        const dateAdded = new Date(product.dateAdded);
        const now = new Date();
        const diffInMs = now.getTime() - dateAdded.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInDays < 7) {
            productsAddedByTimeInterval[0].productCount++;
        }
        if (diffInDays < 30) {
            productsAddedByTimeInterval[1].productCount++;
        }
        if (diffInDays < 365) {
            productsAddedByTimeInterval[2].productCount++;
        }
        if (diffInDays < 3650) {
            productsAddedByTimeInterval[3].productCount++;
        }
        
        productsAddedByTimeInterval[4].productCount++;
    }

    return productsAddedByTimeInterval;
}
