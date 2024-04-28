const NotImplemented = require('./../errors/internalServes.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const NotFound = require('../errors/notfound.error');

const problmeService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: 'Ping controller is up' });
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problmeService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully created a new problem',
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const problem = await problmeService.getProblem(req.params.id);
    if (!problem) {
      throw new NotFound('Problem', id);
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully fetched a problem',
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problmeService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully fetched all the problems',
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const deleteProblem = await problmeService.deleteProblem(req.params.id);
    if (!deleteProblem) {
      throw new NotFound('Problem', id);
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully deleted a problems',
      error: {},
      data: deleteProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req, res, next) {
  try {
    const updateProblem = await problmeService.updateProblem(req.params.id);
    if (!updateProblem) {
      throw new NotFound('Problem', id);
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully updated a problems',
      error: {},
      data: updateProblem,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
