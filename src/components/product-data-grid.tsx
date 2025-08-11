import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";
import type { Product } from "../models/product";
import { Box } from "@mui/material";

type ProductDataGridProps = {
    products: Product[] | undefined;
    isLoading: boolean;
}

export function ProductDataGrid({ products, isLoading }: ProductDataGridProps) {
    let rows: GridRowsProp = [];
    if (products) {
        rows = products?.map(product => ({
            id: product.id,
            category: product.category,
            name: product.name,
            code: product.code,
            price: "$" + product.price,
            sku: product.sku,
            stockQuantity: product.stockQuantity.toLocaleString(),
            dateAdded: new Date(product.dateAdded).toLocaleDateString()
        }));
    }

    const columns: GridColDef[] = [
        { field: 'category', headerName: 'Category', flex: .8 },
        { field: 'name', headerName: 'Name', flex: 1.5 },
        { field: 'code', headerName: 'Product Code', flex: 1 },
        { field: 'price', headerName: 'Price', flex: 0.5 },
        { field: 'sku', headerName: 'SKU', flex: 1 },
        { field: 'stockQuantity', headerName: 'Stock Quantity', flex: 0.5 },
        { field: 'dateAdded', headerName: 'Date Added', flex: 0.5 }
    ];
    return (
        <Box sx={{ width: '100%', p: 2 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                loading={isLoading}
            />
        </Box>
    );
}