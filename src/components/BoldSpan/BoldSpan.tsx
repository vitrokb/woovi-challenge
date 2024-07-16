interface BoldSpanType {
  children: string;
}

function BoldSpan({ children }: BoldSpanType) {
  return <span style={{ fontWeight: 700, whiteSpaceCollapse: 'preserve' }}>{children}</span>;
}

export default BoldSpan;
