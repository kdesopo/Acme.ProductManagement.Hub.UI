import { Box } from "@mui/material";
import { useProductList } from "../hooks/use-product-list";
import { ProductDataGrid } from "./product-data-grid";
import { ProductsAddedByTimeIntervalBarChart } from "./products-added-by-time-interval-bar-chart";
import { QuantityByCategoryBarChart } from "./quantity-by-category-bar-chart";

export function Dashboard() {
    const { data: products, isLoading } = useProductList();

    return (
        <> 
            <h1>Dashboard</h1>
            <Box sx={{ width: '100%' }}>
                <div style={{ float: 'left', width: '50%' }}>
                    <QuantityByCategoryBarChart products={products} />
                </div>
                <div style={{ float: 'right', width: '50%' }}>
                    <ProductsAddedByTimeIntervalBarChart products={products} />
                </div>
            </Box>
            <ProductDataGrid products={products} isLoading={isLoading} />
        </>
    );
}