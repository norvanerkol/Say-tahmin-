// Web dosyalarını iOS uygulamasının içine konacak www/ klasörüne kopyalar.
import { cpSync, mkdirSync, rmSync } from "node:fs";

const files = ["index.html", "privacy.html", "support.html", "manifest.webmanifest", "favicon.ico", "fonts", "icons"];
rmSync("www", { recursive: true, force: true });
mkdirSync("www");
for (const f of files) cpSync(f, `www/${f}`, { recursive: true });
console.log("www/ hazır:", files.join(", "));
