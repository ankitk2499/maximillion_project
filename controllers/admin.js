const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    editing: false
  });
  // console.log("first")
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      hasProduct: products.length > 0,
      pageTitle: 'Admin Products'
    });
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  // console.log(editMode)
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    // console.log("first")
    // console.log(product)
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req,res)=>{
  const prodId = req.body.ProductId
  const updatedTitle = req.body.title
  const updatedPrice = req.body.price
  const updatedimageUrl = req.body.imageUrl
  const updatedDiscription = req.body.discription
  const updatedproduct = new Product(prodId, updatedTitle, updatedPrice, updatedimageUrl, updatedDiscription)
  updatedproduct.save()
  res.redirect('/')
}

exports.deleteProduct = (req,res)=>{
  
}
