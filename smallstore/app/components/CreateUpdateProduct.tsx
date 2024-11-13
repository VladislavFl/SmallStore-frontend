import { Modal } from "antd";
import { ProductRequest } from "../services/products";
import { useEffect, useState } from "react";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";

interface Props {
    mode: Mode;
    values: Product;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: ProductRequest) => void;
    handleUpdate: (id: string, request: ProductRequest) => void;
}

export enum Mode {
    Create,
    Edit,
}

export const CreateUpdateProduct = ({
    mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreate,
    handleUpdate,
} : Props) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(1);

    useEffect(() => {
        setName(values.name);
        setDescription(values.description);
        setPrice(values.price);
    }, [values]);

    const handleOnOk = async() => {
        const productRequest = { name, description, price };

        mode == Mode.Create ? handleCreate(productRequest) : handleUpdate(values.id, productRequest);
    };

    return (
        <Modal 
            title={mode === Mode.Create ? "Add product" : "Edit Product"} 
            open={isModalOpen} 
            cancelText={"Cancel"}
            onOk={handleOnOk}
            onCancel={handleCancel}
        >
            <div className="product__modal">
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product name"
                />

                <TextArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoSize={{ minRows: 4, maxRows: 4}}
                    placeholder="Description"
                />

                <Input
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    placeholder="Price"
                />
            </div>
        </Modal>
    )
};