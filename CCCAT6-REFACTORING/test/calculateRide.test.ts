import { calculateRide } from "../src/calculateRide"

test("deve calcular o valor da corrida em horário normal", function() {
    const fare = calculateRide([ { distance: 10, date: new Date("2021-03-01T10:00:00")}]);
    expect(fare).toBe(21);
});

test("deve calcular o valor da corrida em horário noturno", function() {
    const fare = calculateRide([ { distance: 10, date: new Date("2021-03-01T23:00:00")}]);
    expect(fare).toBe(39);
});

test("deve calcular o valor da corrida em horário no domingo", function() {
    const fare = calculateRide([ { distance: 10, date: new Date("2021-03-07T10:00:00")}]);
    expect(fare).toBe(29);
});

test("deve calcular o valor da corrida em horário no domingo a noite", function() {
    const fare = calculateRide([ { distance: 10, date: new Date("2021-03-07T23:00:00")}]);
    expect(fare).toBe(50);
});

test("deve calcular o valor da corrida mínima", function() {
    const fare = calculateRide([{ distance: 3, date: new Date("2021-03-07T10:00:00")}]);
    expect(fare).toBe(10);
});

test("deve retornar -1 se a distância for inválida", function() {
    const fare = calculateRide([{ distance: -3, date: new Date("2021-03-07T10:00:00")}]);
    expect(fare).toBe(-1);
});

test("deve retornar -2 se a data for inválida", function() {
    const fare = calculateRide([{ distance: 10, date: new Date("asdasdas")}]);
    expect(fare).toBe(-2);
});

// test("deve calcular o valor da corrida em multiplos horários", function() {
//     const fare = calculateRide([
//         { distance: 10, date: new Date("2021-03-07T21:00:00")},
//         { distance: 10, date: new Date("2021-03-07T22:00:00")}
//     ]);
//     expect(fare).toBe(60);
// });