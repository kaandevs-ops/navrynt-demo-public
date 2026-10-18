import {spawnSync} from 'node:child_process';
const result=spawnSync('python3',['scripts/validate.py'],{stdio:'inherit',cwd:new URL('..',import.meta.url)});process.exit(result.status??1);
