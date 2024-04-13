const express = require('express');
const { ProblemController } = require('../../controllers');
const problemRouter = express.Router();

problemRouter.get('/ping', ProblemController.pingProblemController);
problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.get('/', ProblemController.getProblems);
problemRouter.post('/:id', ProblemController.addProblem);
problemRouter.delete('/:id', ProblemController.addProblem);
problemRouter.put('/:id', ProblemController.updateProblem);

module.exports = problemRouter;
