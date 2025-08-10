import { useProductList } from "../hooks/use-product-list";
import { ProductDataGrid } from "./product-data-grid";
import { ProductsAddedByTimeIntervalBarChart } from "./products-added-by-time-interval-bar-chart";
import { QuantityByCategoryBarChart } from "./quantity-by-category-bar-chart";

export function Dashboard() {
    const { data: products, isLoading } = useProductList();

    return (
        <> 
            <h1>Dashboard</h1>
            <QuantityByCategoryBarChart products={products} />
            <ProductsAddedByTimeIntervalBarChart products={products} />
            <ProductDataGrid products={products} isLoading={isLoading} />
        </>
    );
}