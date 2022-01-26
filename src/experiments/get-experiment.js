import DummyExperiment from 'experiments/dummy-experiment';
import DummyExperiment2 from 'experiments/dummy-experiment2';

export function getExperiment(path) {

  if ('experiments/dummy-experiment') {
    return DummyExperiment;
  }

  if ('experiments/dummy-experiment2') {
    return DummyExperiment2;
  }
};
