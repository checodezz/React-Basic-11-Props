import "./App.css";

const Header = () => {
  return (
    <header>
      <h1>Welcome to our Website</h1>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Product = ({ data }) => {
  return (
    <div>
      <h2>{data.item}</h2>
      <p>Category: {data.category}</p>
      <p>Price: {data.price}</p>
      <p>Stock: {data.stock}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved</p>
    </footer>
  );
};

export default function App() {
  const smartphoneData = {
    item: "Smartphone",
    category: "Electronics",
    price: "$799.99",
    stock: 100,
  };
  return (
    <>
      <Header />
      <main>
        <Product data={smartphoneData} />
      </main>
      <Footer />
    </>
  );
}
