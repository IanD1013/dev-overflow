/**
 * This is a server component
 */

import Link from "next/link";

import { deleteTicket } from "./lib/actions";
import { Ticket, readFile } from "./lib/helpers";

async function Home() {
  const request = await readFile();
  const result = Object.values(request) as Ticket[];

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center gap-10 p-24">
      <h1 className="w-full text-left text-5xl font-bold">Tickets</h1>

      {result.length > 0 ? (
        <ul className="flex w-full flex-col gap-5">
          {result.map((ticket) => (
            <li
              key={ticket.id}
              className="flex w-full justify-between gap-5 rounded-md p-5 shadow-md"
            >
              <Link href={`/ticket/update/${ticket.id}`} className="flex-1">
                <p>
                  {ticket.name}
                  <br />
                  <span className="text-xs">
                    {ticket.status} - {ticket.type}
                  </span>
                </p>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await deleteTicket(ticket.id);
                }}
              >
                <button type="submit" className="text-red-500">
                  Delete
                </button>
              </form>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tickets</p>
      )}

      <div className="flex flex-wrap gap-5">
        <Link href="server-action-demo/ticket/create" className="text-blue-700">
          Create a new ticket
        </Link>
        <Link
          href="server-action-demo/ticket/create/client"
          className="text-blue-700"
        >
          Create a new ticket (client)
        </Link>
      </div>
    </main>
  );
}

export default Home;
