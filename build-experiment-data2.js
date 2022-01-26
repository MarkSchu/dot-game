const fs = require('fs');
const path = require('path');

function getName(filename) {
  return filename.replace('-', ' ');
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1)
}

function getComponent(filename) {
  const words = filename.split('-');
  return words.map(capitalize).join('');
}

function getPath(filename) {
  return `experiments/${filename}`;
}










let experimentDir = path.resolve(__dirname, 'src/experiments');
let outputFileName = 'get-experiment.js';
let filenames = fs.readdirSync(experimentDir);
let importStatements = '';
let conditionStatements = '';

filenames.forEach((filename) => {

  if (filename === outputFileName) {
    return;
  }

  const name = getName(filename);
  const component = getComponent(filename);
  const path = getPath(filename);

  importStatements += `import ${component} from '${path}';\n`;
  conditionStatements += (
`
  if ('${path}') {
    return ${component};
  }
`)
});

const dataContent = (
  importStatements
  + '\n'
  + 'export function getExperiment(path) {'
  + '\n'
  + conditionStatements
  + '};'
);


fs.writeFileSync(experimentDir + '/' + outputFileName, dataContent);
