// example declaration file - remove these and add your own custom typings
declare var global: any;
// memory extension samples
interface CreepMemory {
  role: string;
  room: string;
  working: boolean;
}

interface Memory {
  uuid: number;
  log: any;
  logger: any;
  colonies:any;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}
