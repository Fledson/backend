const CategoryRepository = require("../repositories/CategoryRepository");

class CategoryController {

  async index(request, response){
    const { orderBy } = request.body;
    const categories = await CategoryRepository.findAll(orderBy);
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoryRepository.findById(id);

     if(!category) {
      return response.status(404).json({ error: "Category not found " });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if(!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const categoryExists = await CategoryRepository.findByName(name);

    if(categoryExists) {
      return response.status(400).json({ error: "This name of category is already in use" });
    }

    const category = await CategoryRepository.create(name);

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const category = await CategoryRepository.findById(id);
     if(!category) {
      return response.status(404).json({ error: "Category not found " });
    }

    if(!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const categoryExists = await CategoryRepository.findByName(name);
    if(categoryExists && categoryExists.id !== id) {
      return response.status(400).json({ error: "This name of category is already in use" });
    }

    const newCategory = await CategoryRepository.update(id, { name });

    response.json(newCategory);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoryRepository.delete(id);

    response.sendStatus(204);
  }

}

module.exports = new CategoryController();
