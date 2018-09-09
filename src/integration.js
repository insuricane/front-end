const { PythonShell } = require("python-shell");
const { exec } = require("child_process");

const sample_lat = "-80";
const sample_lng = "30";

async function sh(cmd) {
  return new Promise(function(resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function main() {
  let { stdout } = await sh("cd portfolio-analysis && python main.py");
  for (let line of stdout.split("\n")) {
    console.log(`${line}`);
  }
}

main();

// let options = {
//   mode: "text",
//   pythonPath: "/Users/jamesxue/anaconda3/envs/insuricane/bin/python",
//   scriptPath:
//     "/Users/jamesxue/workspace/insuricane/front-end/src/portfolio-analysis",
//   args: [sample_lat, sample_lng]
// };

// PythonShell.run("main.py", options, function(err, results) {
//   if (err) throw err;
//   console.log("results: %j", results);
// });
