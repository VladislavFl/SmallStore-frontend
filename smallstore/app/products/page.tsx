"use client";

import Button from "antd/es/button/button";
import { Products } from "../components/Products";
import { useEffect, useState } from "react";
import { createProduct, deleteProduct, getAllProducts, ProductRequest, updateProduct } from "../services/products";
import Title from "antd/es/typography/Title";
import { CreateUpdateProduct, Mode } from "../components/CreateUpdateProduct";
import { request } from "http";

export default function ProductsPage() {
    const defaultValues = {
        name: "",
        description: "",
        price: 1,
    } as Product

    const [values, setValues] = useState<Product>(defaultValues);

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);

    useEffect(() => {
        const getProducts = async () => {
            const products = await getAllProducts();
            setLoading(false);
            setProducts(products);
        };

        getProducts();
    }, []);

    const handleCreateProduct = async (request: ProductRequest) => {
        await createProduct(request);
        closeModal();

        const products = await getAllProducts();
        setProducts(products);
    };

    const handleUpdateProduct = async (id: string, request: ProductRequest) => {
        await updateProduct(id, request);
        closeModal();

        const products = await getAllProducts();
        setProducts(products);
    };

    const handleDeleteProduct = async (id: string) => {
        await deleteProduct(id);

        const products = await getAllProducts();
        setProducts(products);
    };

    const openModal = () => {
        setMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (product: Product) => {
        setMode(Mode.Edit);
        setValues(product);
        setIsModalOpen(true);
    };

    return (
        <div>
            <Button
                type="primary"
                style={{ marginTop: "30px" }}
                size="large"
                onClick={openModal}
            >
                Add product
            </Button>

            <CreateUpdateProduct
                mode={mode}
                values={values}
                isModalOpen={isModalOpen}
                handleCreate={handleCreateProduct}
                handleUpdate={handleUpdateProduct}
                handleCancel={closeModal}
            />

            {loading ? <Title>Loading...</Title> : <Products products={products} handleOpen={openEditModal} handleDelete={handleDeleteProduct} />}
        </div>
    );
}
