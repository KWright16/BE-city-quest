const gamesRouter = require("express").Router();
const { createGame, removeGame, getGameByPin, addNewPlayer } = require("../controllers/games");

gamesRouter.route('').post(createGame);

gamesRouter.route('/:gamePin').delete(removeGame).get(getGameByPin);

gamesRouter.route('/:gameId/players').post(addNewPlayer)


module.exports = gamesRouter;
