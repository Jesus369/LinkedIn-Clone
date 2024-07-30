import { IComment } from "@/types/comment";
import { IUser } from "@/types/user";
import mongoose, { Schema, Document, models, Model } from "mongoose";

export interface IPostBase {
  user: IUser;
  text: string;
  imageUrl: string;
  comments?: IComment[];
  likes?: string[];
}
