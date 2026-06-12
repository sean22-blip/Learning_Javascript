import fs from'fs';
import { spawn } from 'child_process';
import path from 'path';
import path from 'path';
const DB_Config = {
    name : 'airline_db',
    user : 'root',
    password: 1334,
    host: 'localhost'
}

const backupDir = path.join(DB_Config.name, 'backup_js_edition');
if(!fs.existsSync(backupDir)){
    fs.mkdirSync(backupDir);
}

const timeStamp = new Date().toISOString();
const fileName  = `${DB_Config.name} ${timeStamp}.sql`;
const path = path.join(backupDir, fileName);





