import Sqlite3 from "./generated/Sqlite3";
import * as fs from "fs";
import KaitaiStream from "kaitai-struct/KaitaiStream";

const contents = fs.readFileSync("test.db");
const parsedSqlite3 = new Sqlite3(new KaitaiStream(contents));
parsedSqlite3._read();

console.log(parsedSqlite3._debug.numPages);
console.log(parsedSqlite3.__type);
console.log(typeof parsedSqlite3.__type);
console.log(parsedSqlite3.magic);
console.log(typeof parsedSqlite3.magic);
console.log(parsedSqlite3.applicationId);
console.log(typeof parsedSqlite3.applicationId);
console.log(parsedSqlite3.lenPage);
console.log(typeof parsedSqlite3.lenPage);
console.log(parsedSqlite3.maxPayloadFrac);
console.log(typeof parsedSqlite3.maxPayloadFrac);

const A = Sqlite3.Versions.LEGACY;
console.log(A);

const B = Sqlite3.Encodings.UTF_8;
console.log(B);
