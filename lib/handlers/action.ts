/**
 * This is a server action handler
 * -> adding authentication checks
 * -> validation filters
 * -> proper error handling
 */

"use server";

import { Session } from "next-auth";
import { ZodError, ZodSchema } from "zod";

import { auth } from "@/auth";

import { UnauthorizedError, ValidationError } from "../http-errors";
import dbConnect from "../mongoose";

type ActionOptions<T> = {
  params?: T;
  schema?: ZodSchema<T>;
  authorize?: boolean;
};

// 1. checking whether the schema and params are provided and validated
// 2. checking whether the user is authorized
// 3. connecting to the database
// 4. returning the params and session
async function action<T>({ params, schema, authorize = false }: ActionOptions<T>) {
  if (schema && params) {
    try {
      schema.parse(params);
    } catch (error) {
      if (error instanceof ZodError) {
        return new ValidationError(error.flatten().fieldErrors as Record<string, string[]>);
      } else {
        return new Error("Schema validation failed");
      }
    }
  }

  let session: Session | null = null;

  if (authorize) {
    session = await auth();

    if (!session) {
      return new UnauthorizedError();
    }
  }

  await dbConnect();

  return { params, session };
}

export default action;
