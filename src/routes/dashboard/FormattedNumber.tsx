interface Props {
  number: number
}

export default function FormattedNumber({ number }: Props) {
  return (
    <span>
      {`${number} €` || ""}
    </span>
  );
}
