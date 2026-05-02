import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = [
  ["https://leadgravity.ai/opengraph-image.png", "public/seo/leadgravity/opengraph-image.png"],
  ["https://leadgravity.ai/images/social_proof_1/eric.jpg", "public/images/leadgravity/eric.jpg"],
  ["https://leadgravity.ai/images/social_proof_1/Roman.png", "public/images/leadgravity/roman.png"],
  ["https://leadgravity.ai/images/social_proof_1/Maxime.png", "public/images/leadgravity/maxime.png"],
  ["https://leadgravity.ai/images/social_proof_1/Alexandra.png", "public/images/leadgravity/alexandra.png"],
  ["https://leadgravity.ai/images/social_proof_1/Matt.jpg", "public/images/leadgravity/matt.jpg"],
  ["https://leadgravity.ai/images/social_proof_1/Hugo.jpeg", "public/images/leadgravity/hugo.jpeg"],
  ["https://leadgravity.ai/images/social_proof_1/Igor.jpg", "public/images/leadgravity/igor.jpg"],
  ["https://leadgravity.ai/images/social_proof_1/user2.png", "public/images/leadgravity/user2.png"],
  ["https://leadgravity.ai/images/social_proof_1/user3.png", "public/images/leadgravity/user3.png"],
  ["https://leadgravity.ai/kajal_goel_stripe.jpeg", "public/images/leadgravity/kajal-goel-stripe.jpeg"],
  ["https://leadgravity.ai/images/partners/babylovegrowth.png", "public/images/leadgravity/partners/babylovegrowth.png"],
  ["https://leadgravity.ai/images/partners/chatseo-logo-1.png", "public/images/leadgravity/partners/chatseo-logo-1.png"],
  ["https://leadgravity.ai/images/partners/gojiberry.svg", "public/images/leadgravity/partners/gojiberry.svg"],
  ["https://leadgravity.ai/images/partners/logo-benly-black-medium.svg", "public/images/leadgravity/partners/logo-benly-black-medium.svg"],
  ["https://leadgravity.ai/images/partners/Noota.svg", "public/images/leadgravity/partners/noota.svg"],
  ["https://leadgravity.ai/images/partners/taapit.png", "public/images/leadgravity/partners/taapit.png"],
];

async function download([url, output]) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, buffer);
  return output;
}

const concurrency = 4;
const pending = [...assets];
const downloaded = [];

async function worker() {
  while (pending.length) {
    const asset = pending.shift();
    if (!asset) return;
    downloaded.push(await download(asset));
  }
}

await Promise.all(Array.from({ length: concurrency }, worker));

console.log(`Downloaded ${downloaded.length} assets`);
for (const file of downloaded) console.log(file);
