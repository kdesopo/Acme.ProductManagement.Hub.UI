import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Product } from "../models/product";

export const useProductList = () => {
    return useQuery<Product[]>({
        queryKey: ['productlist'],
        queryFn: async () => axios.get('https://localhost:44360/api/products').then(resp => resp.data)
    });
}