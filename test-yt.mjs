import { Platform, Innertube } from 'youtubei.js';
import vm from 'vm';

// Custom evaluator using Node.js vm module
Platform.shim.eval = (playerData, args) => {
  const script = playerData.output;
  
  // Build code that executes the player script and calls the appropriate functions
  let evalCode = script + '\nconst __result = {};\n';
  
  if (typeof args.sig === 'string') {
    evalCode += `__result.sig = sigFunction(sig);\n`;
  }
  if (typeof args.n === 'string') {
    evalCode += `__result.n = nFunction(n);\n`;
  }
  evalCode += '__result;\n';
  
  const context = vm.createContext({ ...args });
  const result = vm.runInContext(evalCode, context, { timeout: 10000 });
  return result;
};

console.log('Creating Innertube...');
const yt = await Innertube.create();
console.log('Getting video info...');
const info = await yt.getBasicInfo('dQw4w9WgXcQ');

const formats = info.streaming_data?.formats || [];
const adaptive = info.streaming_data?.adaptive_formats || [];

console.log('Title:', info.basic_info.title);
console.log('Muxed formats:', formats.length);
console.log('Adaptive formats:', adaptive.length);

// Try decipher
const f = formats[0];
const url = await f.decipher(yt.session.player);
console.log('Deciphered URL type:', typeof url);
console.log('Deciphered URL:', String(url).substring(0, 200));

// Check a few adaptive formats
for (const fmt of adaptive.slice(0, 3)) {
  try {
    const dUrl = await fmt.decipher(yt.session.player);
    console.log(`itag=${fmt.itag} quality=${fmt.quality_label || fmt.audio_quality} hasUrl=${!!dUrl} url_start=${String(dUrl).substring(0, 80)}`);
  } catch(e) {
    console.log(`itag=${fmt.itag} ERROR: ${e.message}`);
  }
}
