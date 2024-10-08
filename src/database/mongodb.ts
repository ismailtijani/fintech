import mongoose from "mongoose";
import Logger from "../library/logger";
import { mongoUrl } from "../config/app";
import errorHandler from "../middleware/errorHandler";
import { config } from "dotenv";

config();

class MongoDB {
  static async connect() {
    try {
      await mongoose.set("strictQuery", false).connect(mongoUrl, {
        retryWrites: true,
        w: "majority",
      });

      Logger.info("DB Connection Successful");
      Logger.info(`'''''''''''''''''''''''''`);
    } catch (error: any) {
      Logger.error(`MongoDB connection error: ${error.message}`);
      errorHandler.handleError(error);
    }
  }
}

export default MongoDB.connect;
