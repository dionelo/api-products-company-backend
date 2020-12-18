import Product from '../models/Product'

export const getAllProducts = async (req, res) => {
	const products = await Product.find()
	res.json(products)
}

export const createProduct = async (req, res) => {
	const { name, category, price, imageURL } = req.body
	try {
		const newProduct = new Product({ name, category, price, imageURL })
		const productSaved = await newProduct.save()
		res.status(201).json(productSaved)
	} catch (error) {
		console.log(error)
		return res.status(500).json(error)
	}
}

export const getProduct = async (req, res) => {
	const id = req.params.productId
	const product = await Product.findById(id)
	res.status(200).json(product)
}

export const updateProduct = async (req, res) => {
	const id = req.params.productId
	const data = req.body
	const updatedProduct = await Product.findByIdAndUpdate(id, data, {
		new: true,
	})
	res.status(200).json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
	const id = req.params.productId
	await Product.findByIdAndDelete(id)
	res.status(204).json()
}
