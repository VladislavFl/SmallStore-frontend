export interface ProductRequest {
    name: string;
    description: string;
    price: number;
}

export const getAllProducts = async () => {
    const response = await fetch("https://localhost:7068/Products");

    return response.json();
};

export const createProduct = async (productRequest: ProductRequest) => {
    await fetch("https://localhost:7068/Products", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(productRequest),
    });
};

export const updateProduct = async (id: string, productRequest: ProductRequest) => {
    await fetch(`https://localhost:7068/Products/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(productRequest),
    });
};

export const deleteProduct = async (id: string) => {
    await fetch(`https://localhost:7068/Products/${id}`, {
        method: "DELETE"
    });
};