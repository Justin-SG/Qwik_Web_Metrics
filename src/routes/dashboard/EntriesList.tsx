/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import type { DisplayableTransaction } from './booking';

interface Props {
	bookings: DisplayableTransaction[]
}

function EntriesList({ bookings }: Props) {
	return (

		<div className="px-4">
			{bookings.map(function (booking, index) {
				return (
					<button key={index} className="contents" onClick={() => alert('clicked on something')}>
						<div className="grid cursor-pointer grid-cols-[minmax(0,4rem)_3fr_3fr_2fr] grid-rows-2">
							<div className="xl:text-lg-custom row-span-2 text-base">
								{booking.date.toLocaleDateString("de-DE", {
									day: "2-digit",
									month: "2-digit",
								})}
							</div>
							<div
								className="xl:text-lg-custom overflow-hidden truncate text-base"
								title={booking.category}
							>
								{booking.category}
							</div>
							<div className="hide-scrollbar row-span-2 my-auto flex overflow-x-scroll rounded-full text-sm"></div>
							<div className="xl:text-lg-custom text-right text-base">
								{booking.amount?.toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})} €
							</div>
							<div className="truncate text-sm text-gray-500">
								{booking.description}
							</div>
							<div className="overflow-hidden truncate text-right text-sm text-gray-500">
								{booking.account}
							</div>
						</div>
						<hr className="mb-2" />
					</button>
				);
			})}
		</div>

	)
}

export default qwikify$(EntriesList, { eagerness: 'load' });