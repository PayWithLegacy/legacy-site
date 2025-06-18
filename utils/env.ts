function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return value;
}

const DEAL_TRACKER_API_KEY = getEnv("DEAL_TRACKER_API_KEY");

export { DEAL_TRACKER_API_KEY };
