import Dimension from "../../src/domain/entity/Dimension";
import Item from "../../src/domain/entity/Item";

test("Deve retornar o volume", function() {
    const item = new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3);
    const volume = item.getVolume();
    expect(volume).toBeCloseTo(0.03)
});

test("Deve retornar o volume igual a 0 quando não tiver dimensão", function() {
    const item = new Item(1, "Guitarra", 3000);
    const volume = item.getVolume();
    expect(volume).toBeCloseTo(0)
});

test("Deve retornar a densidade", function() {
    const item = new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3);
    const density = item.getDensity();
    expect(density).toBe(100)
});

test("Deve retornar a densidade igual a 0 quando não tiver peso e dimensão", function() {
    const item = new Item(1, "Guitarra", 1000);
    const density = item.getDensity();
    expect(density).toBe(0)
});