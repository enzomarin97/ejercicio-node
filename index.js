const logger = require('./logger');

try {
    logger.error("Esto es un error personalizado");
} catch (error) {
    logger.error("no se puede ver el error personalizado");
}