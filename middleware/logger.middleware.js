import { sendToSolarWinds } from "../config/solarwinds.js";

export const loggerMiddleware = (req, res, next) => {

  const start = Date.now();

  res.on("finish", async () => {

    const logEntry = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      responseTime: Date.now() - start
    };

    console.log(logEntry);

    await sendToSolarWinds(logEntry);

  });

  next();
};