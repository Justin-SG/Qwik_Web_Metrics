/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";

function DisposableIncome() {
	return (

		<div className="w-full">
			<div className="mb-2 flex justify-between">
				<span className="text-4xl font-medium text-green-400">1.200</span>
				<button
					onClick={() => alert('clicked on something')}
					type="button"
					className="ml-3 inline-flex rotate-90 items-center rounded-lg p-2 text-base text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
				>
					<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					><path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M 7 6 h 13 M 4 12 h 16 m -7 6 h 7"
						/>
					</svg>
				</button>
			</div>
			<div className="h-6 w-full rounded-full bg-red-400 dark:bg-gray-400">
				<div className="h-6 w-4/5 rounded-full bg-green-400 dark:bg-green-400" />
			</div>
		</div>

	)
}

export default qwikify$(DisposableIncome, { eagerness: 'visible' });