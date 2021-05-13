const { build } = require('esbuild');
const chokidar = require('chokidar');
const fs = require('fs-extra');

const generateBuild = async () => {
  await fs.rmdirSync('./build/static', { recursive: true });

  await build({
    entryPoints: ['./src/index.jsx'],
    outdir: './build/static/js',
    minify: true,
    bundle: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'edge16'],
    loader: { ".svg": "dataurl", ".png": "dataurl" },
    define: {
      'process.env.NODE_ENV': "'production'",
    }
  }).catch(() => process.exit(1));

  try {
    await fs.ensureFile('./build/static/js/index.css')
    await fs.move('./build/static/js/index.css', './build/static/css/index.css', { overwrite: true }, (err) => {
        if (err) return console.error(err);
        console.log("success!");
        return null;
        }
      );
  } catch (err) {
    // console.error(err)
  }


};

chokidar.watch('.', {ignored:/build|node_modules|.git/}).on('all', (event, path) => {
  console.log(event, path);
  generateBuild();
});
