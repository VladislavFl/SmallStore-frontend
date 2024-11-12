import Layout, { Header, Content, Footer } from "antd/es/layout/layout";
import "./globals.css";
import Link from "@/node_modules/next/link";
import Menu from "antd/es/menu";


const items = [
  { key: "home", label: <Link href={"/"}>Home</Link> },
  { key: "products", label: <Link href={"/products"}>Products</Link> },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content style={{ padding: "0 48px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Small store 2024
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
