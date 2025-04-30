"use client";

import { createTicket } from "@/app/server-action-demo/lib/actions";

function Page() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await createTicket(formData);
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center gap-10 p-24">
      <h1 className="w-full text-left text-5xl font-bold">
        New Ticket (client)
      </h1>

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="h-10 w-full border border-zinc-400 px-3"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="type" className="font-medium">
            Type
          </label>

          <input
            type="text"
            name="type"
            className="h-10 w-full border border-zinc-400 px-3"
          />
        </div>
        <button type="submit" className="text-green-700">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Page;
