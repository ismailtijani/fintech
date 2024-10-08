import Joi from "joi";
import { IUser, ILogin } from "../library/interfaces";

const joiSchema = {
  signup: Joi.object<IUser>({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    password: Joi.string().min(8).max(20).required(),
    phoneNumber: Joi.string().required(),
  }),
  login: Joi.object<ILogin>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  forgetPassword: Joi.object({ email: Joi.string().email().required() }),
  resetPassword: Joi.object({
    password: Joi.string().min(8).max(20).required(),
  }),
  fundWallet: Joi.object({ amount: Joi.number().min(10).required() }),
  transferFunds: Joi.object({
    amount: Joi.number().min(100).required(),
    recipient_wallet: Joi.string().required(),
  }),
  withdrawFunds: Joi.object({ amount: Joi.number().min(10).required() }),
};

export default joiSchema;
