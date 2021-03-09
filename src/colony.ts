const MY_CR_INIT = [
  [WORK, CARRY, MOVE],
  {
    role: 'idle',
    roleDna: 'settler',
    status: 'incubating',
  }
]

interface IColonyMemory {
  spawnIds: Array<Id<StructureSpawn>> | undefined;
  roomName: string | undefined;
  initialized: boolean;
}
const defaultIColonyMemory: IColonyMemory = {
  spawnIds: [],
  roomName: '',
  initialized: false
}
export class Colony {
  memory: IColonyMemory;

  constructor(sp: Id<StructureSpawn>) {
    let ob = Game.getObjectById(sp)
    if (Memory.colonies === undefined) {
      Memory.colonies = [];
      this.memory = Memory.colonies;
      this.firstInit();
    } else {
      this.memory = Memory.colonies[ob!.name]
    }
  }
    private firstInit():void {
       console.log('First Init')
    }
}
