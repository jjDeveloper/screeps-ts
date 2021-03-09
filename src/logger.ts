export class Logger {
  constructor() {
    if (Memory.logger === undefined) {
      Memory.logger = {
        queue: [],
        staleCount: 0
      }
    }
  }
  queueMessage(sender: string, message: string): void {
    let mem = Memory.logger.queue;
    mem.unshift([sender, message])
    Memory.logger.queue = mem;
  }
  clear(): void {
    Memory.logger.queue = [];
  }
  run(): void {
    let mem = Memory.logger.queue;
    mem.forEach((q: any) => {
      console.log(`'${q[0]}': '${q[1]}'`);
    })
  }
  logObject(ob: object): void {
    console.log(JSON.stringify(ob))
  }
  stale(n: number): void {
    const sc = Memory.logger.staleCount;
    Memory.logger.staleCount = sc + n;
    console.log('logger: stale trigger')
    this.queueMessage('logger', 'Logger stale trigger')
  }
}
