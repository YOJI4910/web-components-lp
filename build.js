require("esbuild").build({
  target: "es2020",
  platform: "browser",
  entryPoints: ["./src/index.js"],
  outdir: "public",
  bundle: true,
  minify: false,
  sourcemap: true,
  watch: {
    onRebuild(err, result) {
      console.log(JSON.stringify(err?.errors))
      console.log(JSON.stringify(result?.warnings))
    }
  }
})
  .then(() => {
  console.log("===============================================")
  console.log(`${new Date().toLocaleString()}: watching...`)
})
  .catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
