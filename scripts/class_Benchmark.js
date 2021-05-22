export class Benchmark {
    constructor(name) {
        this.name = name;
        this.start = performance.now();
        this.result = 0;
    }

    stop() {
        this.result = performance.now() - this.start;
        return this;
    }

    get detailedResults() {
        return `Task "${this.name}" executed in ${this.result} ms.`;
    }
}