const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('./../errors/internalServes.error');

function pingProblemController(req, res) {
  return res.json({ message: 'Ping controller is up' });
}

function addProblem(req, res) {
  try {
    throw new NotImplemented('addProblem');
  } catch (error) {
    next();
  }
}

function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not Implemented',
  });
}

function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not Implemented',
  });
}

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not Implemented',
  });
}

function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not Implemented',
  });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
