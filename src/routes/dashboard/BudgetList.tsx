import { component$ } from '@builder.io/qwik';
import FormattedNumber from './FormattedNumber';

interface Props {
	budgets: Budget[]
}

interface Budget {
	limit: number;
	spent: number;
	name: string;
	percentage: number;
}

export default component$(({ budgets }: Props) => {
	return (
		<div class="px-4">
			{budgets.map(function (budget, index) {
				return (
					<a key={index} href="#top" class="block border-b">
						<div>
							<div class="mb-1 flex justify-between pt-4 text-base font-medium md:text-lg">
								<span>{budget.name}</span>
								<span>
									<FormattedNumber number={budget.spent} /> / <FormattedNumber number={budget.limit} />
								</span>
							</div>
							<div class="mb-4 h-4 w-full rounded-full bg-gray-200">
								<div
									class={`h-4 rounded-full
										${budget.percentage > 0.9 ? 'bg-red-500' :
											budget.percentage > 0.7 ? 'bg-yellow-300' :
												'bg-green-400'}`}
									style={{ width: `${budget.percentage * 100}%` }}
								/>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	)
})