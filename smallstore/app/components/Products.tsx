import Card from "antd/es/card/Card"
import { CardTitle } from "./Cardtitle"
import Button from "antd/es/button/button"

interface Props {
    products: Product[]
}

export const Products = ({products}: Props) => {
    return (
        <div className="cards">
            {products.map((product : Product) => (
                <Card 
                    key={product.id} 
                    title={<CardTitle name={product.name} price={product.price}/>} 
                    bordered={false}
                >
                    <p>{product.description}</p>
                    <div className="card__buttons">
                        <Button>
                            Edit
                        </Button>
                        <Button>
                            Delete
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}