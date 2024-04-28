const winston = require('winston');

const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
      )
    ),
  })
);

const logger = winston.createLogger({
  format: winston.format.combine(
    //first argument
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    //second argument
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),

  transports: allowedTransports,
});

module.exports = logger;
