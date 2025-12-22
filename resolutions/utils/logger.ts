function logger(challengeNumber: string): void {
  const timestamp = new Date().toISOString();
  console.log("\n");
  console.log("==============================================================");
  console.log(`[${timestamp}] ${challengeNumber}`);
}

export { logger };
