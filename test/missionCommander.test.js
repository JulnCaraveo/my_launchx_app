const MissionCommander = require("./../app/missionComander")
describe("Pruebas de unidad de practica", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionCommander = new MissionCommander("Woopa")

        expect(myMissionCommander.name).toBe("Woopa");
    })
});