import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";
import type { Product } from "../models/product";

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
            price: product.price,
            sku: product.sku,
            stockQuantity: product.stockQuantity,
            dateAdded: new Date(product.dateAdded).toLocaleDateString()
        }));
    }

    const columns: GridColDef[] = [
        { field: 'category', headerName: 'Category' },
        { field: 'name', headerName: 'Name' },
        { field: 'code', headerName: 'Product Code'},
        { field: 'price', headerName: 'Price' },
        { field: 'sku', headerName: 'SKU' },
        { field: 'stockQuantity', headerName: 'Stock Quantity' },
        { field: 'dateAdded', headerName: 'Date Added' }
    ];    
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            loading={isLoading}
        />
    );
}