const cloudinary = require("../../config/cloudinary");

class ClientController {
  constructor(clientMode) {
    this.client = clientMode;
  }

  async getAll(req, res) {
    const clients = await this.client.find({});

    res.send(clients);
  }

  async getById(req, res) {
    const client = await this.client.findById(req.params.id);
    if (!client) return res.sendStatus(404);

    res.send(client);
  }

  async create(req, res) {
    let client = await this.client.findOne({ cpf: req.body.cpf });

    if (client) {
      return res.status(400).send({ error: "Client already registered" });
    }

    client = await this.client.create(req.body);

    res.status(201).send(client);
  }

  async remove(req, res) {
    await this.client.findByIdAndRemove({ _id: req.params.id });

    res.sendStatus(204);
  }

  async update(req, res) {
    const { name, cpf, phone, birth_date, address, vehicle } = req.body;

    try {
      const client = await this.client.findById(req.params.id);
      if (!client) return res.sendStatus(404);

      client.name = name;
      client.cpf = cpf;
      client.phone = phone;
      client.birth_date = birth_date;
      client.address = address;
      client.vehicle = vehicle;

      await client.save();

      res.sendStatus(204);
    } catch (err) {
      res.status(422).send({ error: error.message });
    }
  }

  async saveImage(req, res) {
    try {
      const client = await this.client.findById(req.params.id);

      if (!client) return res.sendStatus(404);

      const image = await cloudinary.upload(req.file.path);

      client.vehicle.image = image.url;

      await client.save();

      res.sendStatus(204);
    } catch (error) {
      res.status(422).send({ error: error.message });
    }
  }
}

module.exports = ClientController;
