import { sync } from 'find-up';
import { readFileSync } from 'fs';

const configPath = sync(['.servesiderc', '.serveside.json']);
const config = configPath ? JSON.parse(readFileSync(configPath)) : {};

export default config;
