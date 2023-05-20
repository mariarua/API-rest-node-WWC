const createHttpError = require("http-errors");

const Validators = require("../validators");

module.exports = function (validator, schema) {
  if (!Validators.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`);
  if (!Validators[validator].hasOwnProperty(schema))
    throw new Error(`'${schema}' doesnt exists inside ${validator}`);

  return async function (req, res, next) {
    try {
      const validated = await Validators[validator][schema].validateAsync(
        req.body
      );
      req.body = validated;
      next();
    } catch (err) {
      if (err.isJoi)
        // Unprocessable Entity
        return next(createHttpError(422, { message: err.message }));
      // Internal server error
      next(createHttpError(500));
    }
  };
};
