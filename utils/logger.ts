function logger(challengeNumber: string, content: unknown): void {
  const timestamp = new Date().toLocaleString();
  const title = ` CHALLENGE: ${challengeNumber} `;
  const timeStr = ` Time: ${timestamp} `;

  const reset = "\x1b[0m";
  const cyan = "\x1b[36m";
  const yellow = "\x1b[33m";
  const gray = "\x1b[90m";
  const bold = "\x1b[1m";

  const values = JSON.stringify(content, null, 2) || String(content);
  const lines = values.split("\n");

  const width = Math.max(challengeNumber.length + 20, 60);

  console.log(`\n${cyan}╔${"═".repeat(width)}╗${reset}`);

  // header
  console.log(`${cyan}║${yellow}${bold}${title.padEnd(width)}${cyan}║${reset}`);
  console.log(`${cyan}║${gray}${timeStr.padEnd(width)}${cyan}║${reset}`);

  // separador
  console.log(`${cyan}╠${"═".repeat(width)}╣${reset}`);

  // content
  console.log(`${cyan}║${reset} Result:`.padEnd(width + 8) + `${cyan}║`);
  lines.forEach((line) => {
    const formattedLine = line.substring(0, width - 4).padEnd(width - 4);
    console.log(`${cyan}║${reset}   ${formattedLine} ${cyan}║${reset}`);
  });

  // footer
  console.log(`${cyan}╚${"═".repeat(width)}╝${reset}\n`);
}

export { logger };
