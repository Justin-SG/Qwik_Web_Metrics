/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import FormattedNumber from './FormattedNumber';
import type { DisplayableTransaction } from './booking';

interface Props {
  transaction: DisplayableTransaction
}


export default qwikify$(({ transaction }: Props) => {
  return (
    <>
      <div className="grid cursor-pointer grid-cols-[minmax(0,4rem)_3fr_3fr_2fr] grid-rows-2">
        <div className="xl:text-lg-custom row-span-2 text-base">
          {transaction.date.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
          })}
        </div>
        <div
          className="xl:text-lg-custom overflow-hidden truncate text-base"
          title={transaction.category}
        >
          {transaction.category}
        </div>
        <div className="hide-scrollbar row-span-2 my-auto flex overflow-x-scroll rounded-full text-sm"></div>
        <div className="xl:text-lg-custom text-right text-base">
          <FormattedNumber number={transaction.amount} />
        </div>
        <div className="truncate text-sm text-gray-500">
          {transaction.description}
        </div>
        <div className="overflow-hidden truncate text-right text-sm text-gray-500">
          {transaction.account}
        </div>
      </div>
      <hr className="mb-2" />
    </>
  );
})
