import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Product } from "../models/product";
import { environmentConfig } from "../../environment-config";

export const useProductList = () => {
    return useQuery<Product[]>({
        queryKey: ['productlist'],
        queryFn: async () => axios.get(`${environmentConfig.productManagementApiBaseUrl}/products`).then(resp => resp.data)
    });
}