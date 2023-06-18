const userService = require("../services/user.service");

//Criar Usuario
const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User" });
  }

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

//Procurar Usuarios em Geral
const findAll = async (req, res) => {
  const users = await userService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "There are no registered users" });
  }

  res.send(users);
};

//Procurar Usuario específico por Ids
const findById = async (req, res) => {
  const user = req.user;
  res.send(user);
};

//Atualizar apenas um dado do objeto
const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at leat one field for update" });
  }

  const id = req.params.id

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  )

  res.send({message: "User successfully updated!"})

};

module.exports = { create, findAll, findById, update };
