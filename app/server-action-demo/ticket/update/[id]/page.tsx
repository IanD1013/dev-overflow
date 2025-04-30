import { redirect } from "next/navigation";
import { updateTicket } from "@/app/server-action-demo/lib/actions";
import { readFile } from "@/app/server-action-demo/lib/helpers";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  if (!id) redirect("/server-action-demo");

  const allTickets = readFile();
  const ticket = allTickets[id];
  if (!ticket) redirect("/server-action-demo");

  async function handleSubmit(formData: FormData) {
    "use server";

    await updateTicket(Number(id), formData);
    redirect("/server-action-demo");
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-left w-full">Update Ticket</h1>

      <form action={handleSubmit} className="flex flex-col gap-5 w-full">
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium">
            Name
          </label>
          <input type="text" name="name" defaultValue={ticket.name} className="w-full h-10 px-3 border border-zinc-400" />
        </div>

        <div className="space-y-2">
          <label htmlFor="type" className="font-medium">
            Type
          </label>

          <input type="text" name="type" defaultValue={ticket.type} className="w-full h-10 px-3 border border-zinc-400" />
        </div>

        <div className="space-y-2">
          <label htmlFor="status" className="font-medium">
            Status
          </label>

          <input type="text" name="status" defaultValue={ticket.status} className="w-full h-10 px-3 border border-zinc-400" />
        </div>

        <button type="submit" className="text-green-700">
          Update
        </button>
      </form>
    </main>
  );
}

export default Page;
