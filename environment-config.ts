type EnvironmentConfig = {
  productManagementApiBaseUrl: string;
};

export const environmentConfig: EnvironmentConfig = {
  productManagementApiBaseUrl: import.meta.env.VITE_PRODUCT_MANAGEMENT_API_BASE_URL,
};
