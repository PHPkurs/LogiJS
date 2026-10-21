const fs = require('fs');
const path = require('path');
const pug = require('pug');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'dist');
fs.rmSync(out, {recursive:true, force:true});
fs.mkdirSync(out, {recursive:true});
function copy(src, dest) {
  fs.cpSync(path.join(root, src), path.join(out, dest), {recursive:true});
}
copy('views/images','images');
copy('views/sketches','sketches');
copy('views/librarySketches','librarySketches');
copy('views/css','css');
copy('libraries','libraries');
copy('javascripts','javascripts');
const html = pug.renderFile(path.join(root,'views/logijs.pug'), {no_login:true, pretty:true});
fs.writeFileSync(path.join(out,'index.html'), html.replace(/href="\/"/g, 'href="./"'));
fs.writeFileSync(path.join(out,'.nojekyll'), '');
console.log('Built GitHub Pages files in dist/');
