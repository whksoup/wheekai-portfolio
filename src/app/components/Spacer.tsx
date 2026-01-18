type SpacerProps = {
  size?: number | string;
};

export function Spacer({ size = "2rem" }: SpacerProps) {
  return <div style={{ height: size }} />;
}
