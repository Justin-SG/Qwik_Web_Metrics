/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";
import { z } from 'zod';
import type { FormEvent } from "react";

function submit(event: FormEvent<HTMLFormElement>) {
    const data = {
        date: document.querySelector<HTMLInputElement>('#date')!.value,
        amount: document.querySelector<HTMLInputElement>('#amount')!.value,
        accountId: document.querySelector<HTMLInputElement>('#accountId')!.value,
        description: document.querySelector<HTMLInputElement>('#description')!.value
    };

    const schema = z.object({
        date: z.coerce.date(),
        amount: z.coerce.number().positive(),
        accountId: z.coerce.number().positive(),
        description: z.string().max(255)
    });

    const result = schema.safeParse(data);
    if (!result.success) event.preventDefault();
}

function NewTransaction() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button
                className="bg-green-300 fixed bottom-2 right-2 z-20 ml-2 rounded-full px-5 py-5"
                onClick={() => setModalIsOpen(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-7 w-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>
            </button>
            {
                modalIsOpen &&
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-black z-50"
                >
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                    <div className="flex items-center justify-center w-full h-full">
                        <div className="w-full p-6 max-w-6xl bg-white rounded">
                            <form className="w-full" action="/" method="POST" onSubmit={(e) => submit(e)}>
                                <div className="flex-between flex flex-wrap gap-y-1.5">
                                    <div className="w-full space-y-1.5">
                                        <label
                                            htmlFor="date"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Date
                                        </label>
                                        <input
                                            id="date"
                                            type="date"
                                            name="date"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
                                            required
                                        />
                                    </div>
                                    <div className="w-full space-y-1.5">
                                        <label
                                            htmlFor="amount"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Amount
                                        </label>
                                        <input
                                            id="amount"
                                            type="number"
                                            name="amount"
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
                                            min="0"
                                            step=".01"
                                            pattern="^\d*(\.\d{2})?$"
                                            placeholder="0,00"
                                            required
                                        />
                                    </div>
                                    <div className="w-full space-y-1.5">
                                        <select
                                            id="accountId"
                                            name="accountId"
                                            required
                                            className="block w-full rounded-lg border p-2.5 text-base"
                                        >
                                            <option value="1">Savings account</option>
                                            <option value="2">Daily account</option>
                                        </select>
                                    </div>
                                    <div className="w-full md:pl-1">
                                        <label
                                            htmlFor="description"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={4}
                                            name="description"
                                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-3.5 text-gray-900"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 flex">
                                    <button
                                        className="my-2 mx-auto bg-green-300 px-4 py-2 rounded"
                                        type="submit"
                                    >
                                        Add transfer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default qwikify$(NewTransaction, { eagerness: 'visible' });