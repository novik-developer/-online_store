

class ProductService {
  constructor(products = []) {
    this.products = products
  }

  get(index) {
    return this.products[index]
  }

  getById(id) {
    return this.products.find(product => {
      return product.id === id
    })
  }

  filter(search = '') {
    if (!search.trim()) return this.products
  
    return this.products.filter(product => {
      return product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }
}

