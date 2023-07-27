import express from 'express';
import {
  addTimeline,
  contact,
  getUser,
  login,
  logout,
  myProfile,
  updateUser,
} from '../controller/User.js';
import { isAuthenticated } from '../middlewares/auth.js';

export const userRouter = express.Router();

userRouter.route('/login').post(login);
userRouter.route('/logout').get(logout);
userRouter.route('/user').get(getUser);

userRouter.route('/me').get(isAuthenticated, myProfile);

userRouter.route('/admin/update').put(isAuthenticated, updateUser);

userRouter.route('/admin/add/timeline/add').post(isAuthenticated, addTimeline);

userRouter.route('/me').post(contact);
