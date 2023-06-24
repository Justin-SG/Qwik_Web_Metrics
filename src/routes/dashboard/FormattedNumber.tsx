interface Props {
  number: number
}

export default function FormattedNumber({ number }: Props) {
  return (
    <span>
      {`${number?.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} €` || ""}
    </span>
  );
}
