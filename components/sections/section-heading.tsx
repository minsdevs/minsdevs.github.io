type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  note?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  note,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-index">
          {index} / {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}
