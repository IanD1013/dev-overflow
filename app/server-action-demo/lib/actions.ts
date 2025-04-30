"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { readFile, writeFile } from "./helpers";

export async function createTicket(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;

  const tickets = readFile();
  const id = Object.keys(tickets).length
    ? Math.max(...Object.keys(tickets).map(Number)) + 1
    : 1;

  tickets[id] = { id, name, status: "open", type };
  writeFile(tickets);
  redirect("/server-action-demo");
}

export async function updateTicket(id: number, formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const status = formData.get("status") as string;

  const tickets = readFile();

  if (!tickets[id]) {
    throw new Error(`Ticket with ID ${id} does not exist.`);
  }

  tickets[id] = { ...tickets[id], name, type, status };
  writeFile(tickets);

  revalidatePath("/");
}

export async function deleteTicket(id: number) {
  const tickets = readFile();

  if (!tickets[id]) {
    throw new Error(`Ticket with ID ${id} does not exist.`);
  }

  delete tickets[id];
  writeFile(tickets);

  revalidatePath("/server-action-demo");
}
