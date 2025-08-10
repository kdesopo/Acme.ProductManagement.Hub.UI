import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Tooltip } from "recharts";
import type { Product } from "../models/product";
import { useEffect, useState } from "react";

type QuantityByCategoryBarChartProps = {
    products: Product[] | undefined;
};

type BarChartData = {
    category: string;
    stockQuantity: number;
};

export function QuantityByCategoryBarChart({ products }: QuantityByCategoryBarChartProps) {
    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);

    useEffect(() => {
        if (products) {
            setBarChartData(getQuantityByCategory(products));
        }
    }, [products]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
                <XAxis dataKey="category" />
                <YAxis dataKey="stockQuantity" />
                <Bar dataKey="stockQuantity" fill="#EF4034" />
                <Tooltip  />
            </BarChart>
        </ResponsiveContainer>
    );
}

function getQuantityByCategory(products: Product[]): BarChartData[] {
    const quantityByCategory: BarChartData[] = [];

    for (const product of products) {
        const existingCategory = quantityByCategory.find(item => item.category === product.category);
        if (existingCategory) {
            existingCategory.stockQuantity += product.stockQuantity;
        } else {
            quantityByCategory.push({
                category: product.category,
                stockQuantity: product.stockQuantity
            });
        }
    }

    return quantityByCategory;
}
