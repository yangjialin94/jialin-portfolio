import fs from 'fs/promises';
import path from 'path';

export async function getExperiences() {
  // Construct the file path to the JSON file
  const filePath = path.join(process.cwd(), 'data', 'experiences.json');

  // Read the file contents
  const fileContents = await fs.readFile(filePath, 'utf8');

  // Parse and return the JSON data
  return JSON.parse(fileContents);
}
