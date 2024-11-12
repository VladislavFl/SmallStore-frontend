export interface ProductRequest {
    name: string;
    description: string;
    price: number;
}

export const getAllProducts = async () => {
    const response = await fetch("https://localhost:7068/Products")

    return response.json();
}