import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";

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
            setBarChartData(getProductsAddedByTimeIntervalBarChartData(productsSortedByDateAdded));
        }
    }, [products]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
                <XAxis dataKey="timeInterval" />
                <YAxis dataKey="productCount" label={{ value: 'Product Count', angle: -90, position: 'center' }} />
                <Bar dataKey="productCount" fill="black">
                    <LabelList dataKey="productCount" position="top" />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}

function getProductsAddedByTimeIntervalBarChartData(products: Product[]): BarChartData[] {
    const barChartData: BarChartData[] = [];

    const productsAddedCountByTimeIntervalMap: Record<string, number> = {
        "This Week": 0,
        "This Month": 0,
        "This Year": 0,
        "This Decade": 0,
        "All Time": 0
    };

    for (const product of products) {
        const dateAdded = new Date(product.dateAdded);
        const now = new Date();
        const diffInMs = now.getTime() - dateAdded.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInDays < 7) {
            productsAddedCountByTimeIntervalMap["This Week"]++;
        }
        if (diffInDays < 30) {
            productsAddedCountByTimeIntervalMap["This Month"]++;
        }
        if (diffInDays < 365) {
            productsAddedCountByTimeIntervalMap["This Year"]++;
        }
        if (diffInDays < 3650) {
            productsAddedCountByTimeIntervalMap["This Decade"]++;
        }

        productsAddedCountByTimeIntervalMap["All Time"]++;
    }

    for (const [timeInterval, productCount] of Object.entries(productsAddedCountByTimeIntervalMap)) {
        barChartData.push({ timeInterval, productCount });
    }

    return barChartData;
}
