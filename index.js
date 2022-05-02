const MissionComander=require("./app/missionComander")

const Nombre = new MissionComander("Julian")
const Apellido= new MissionComander("Caraveo")
const SegNombre=new MissionComander("Alix")

console.log(Nombre.name)
console.log(Apellido.name)
console.log(SegNombre.name)