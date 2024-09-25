const db = require("../../database");

class ContactRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(`
      SELECT
        ctt.*,
        cat.name as category_name
      FROM contacts ctt
      LEFT JOIN categories cat ON cat.id = ctt.category_id
      ORDER BY ctt.name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query(`
      SELECT
        ctt.*,
        cat.name as category_name
      FROM contacts ctt
      LEFT JOIN categories cat ON cat.id = ctt.category_id
      WHERE id = $1
    `, [id]);
    return rows;
  }

  async findByEmail(email) {
    const [rows] = await db.query("SELECT * FROM contacts WHERE email = $1", [email]);
    return rows;;
  }

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(`
      INSERT INTO contacts
        (name, email, phone, category_id)
      VALUES
        ($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, { name, email, phone, category_id }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET
        name        = $1,
        email       = $2,
        phone       = $3,
        category_id = $4
      WHERE
        id          = $5
      RETURNING *
    `,[name, email, phone, category_id, id]);
    return row;
  }

  async delete(id) {
    const deleteOP = await db.query("DELETE FROM contacts WHERE ID = $1", [id]);
    return deleteOP;
  }
}

module.exports = new ContactRepository();
