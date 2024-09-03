export function colorize(text: string, colorCode: number): string {
  return `\x1b[${colorCode}m${text}\x1b[0m`;
}
