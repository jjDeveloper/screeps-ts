export namespace Survey {
  export function spawns(obId: Id<RoomObject>): Array<StructureSpawn> | false {
    const ou = Game.getObjectById(obId)
    return (ou instanceof RoomObject) ? ou!.room!.find(FIND_MY_SPAWNS) : false;
  }
  export function sources(obId: Id<RoomObject>): Array<Source> | false {
    const ou = Game.getObjectById(obId);
    return (ou instanceof RoomObject) ? ou!.room!.find(FIND_SOURCES) : false;
  }
  export function controller(obId: Id<RoomObject>): StructureController | false {
    const ou = Game.getObjectById(obId)
    return (ou instanceof RoomObject) ? ou!.room!.controller! : false;
  }
  export function structures(obId: Id<RoomObject>): AnyOwnedStructure[] | false {
    const ou = Game.getObjectById(obId)
    return (ou instanceof RoomObject) ? ou!.room!.find(FIND_MY_STRUCTURES) : false;
  }
}
