export class Observable {
  constructor(obj) {
    this.data = obj || {};
    this.topics = {
      '*': []
    }
  }

  on(topic, callback) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(callback);
    this.emit(topic, this.data);
  }

  emit(topic, data) {
    if (this.topics[topic]) {
      this.topics[topic].forEach(callback => callback(data[topic], data, topic));
    }
    this.topics['*'].forEach(callback => callback(data[topic], data, topic));
  }

  set(obj) {
    for (var key in obj) {
      this.data[key] = obj[key];
    }
    for (var key in obj) {
      this.emit(key, this.data);
    }
  }
}

export class ObservableVar {
  constructor(value) {
    this.value = value;
    this.callbacks =[];
  }

  on(callback) {
    this.callbacks.push(callback);
  }

  emit() {
    this.callbacks.forEach((callback) => {
      callback(this.value);
    });
  }

  set(value) {
    this.value = value;
    this.emit();
  }
}