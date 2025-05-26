
import Product from "../models/Product.model.js";

const getFilteredProducts = async (req, res) => {
    try {
      let { category, pagination, limit, sortOrder } = req.params;
  
      pagination = Number(pagination);
      limit = Number(limit);
      sortOrder = Number(sortOrder);
  
      let query = {};
  
      if (category !== "all") {
        query.category = category;
      }
  
      const filteredProducts = await Product.find(query).sort({ price: sortOrder });
  
      const paginatedProducts = filteredProducts.slice(
        (pagination - 1) * limit,
        pagination * limit
      );
  
      return res.status(200).json(paginatedProducts);
    } catch (error) {
      console.error("Error fetching filtered products");
      return res.status(500).json({ message: "Error fetching filtered products" });
    }
  };

const getProductDetails = async(req, res) => {
    try {
        const { name, description } = req.body;

        const productDetails = await Product.findOne({name, description});

        return res.status(200).json(productDetails);
    } catch (error) {
        console.error("Error getting product details");
        return res.status(500).json({message:"Error fetching filtered products"})
    }
}

const insertProduct = async(req, res) => {

    const {name, description, price, category, stock} = req.body;

    const newProduct = new Product({
        name,
        description,
        category,
        stock,
        price
    });

    await newProduct.save();

    return res.status(201).json(newProduct);

    
}

export { getFilteredProducts, getProductDetails, insertProduct };