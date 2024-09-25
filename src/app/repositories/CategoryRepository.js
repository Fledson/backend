const db = require("../../database");

class CategoryRepository {

  async findAll(orderBy = "ASC"){
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(`SELECT * FROM categories ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id){
    const [rows] = await db.query("SELECT * FROM categories WHERE id = $1", [id]);
    return rows;
  }

  async findByName(name){
    const [rows] = await db.query("SELECT * FROM categories WHERE name = $1", [name]);
    return rows;
  }

  async create(name){
    const [row] = await db.query(`
      INSERT INTO categories
        (name)
      VALUES
        ($1)
      RETURNING *
    `, [name]);

    return row;
  }

  async update(id, { name }){
    const [row] = await db.query(`
      UPDATE categories
        SET name = $1
      WHERE
        id = $2
      RETURNING *
    `, [name, id]);

    return row;
  }

  async delete(id){
    const deleteOP = await db.query("DELETE FROM categories WHERE id = $1", [id]);
    return deleteOP;
  }
}

module.exports = new CategoryRepository();
