import InputText from "../../../src/behavioral/observer/InputText";
import Label from "../../../src/behavioral/observer/Label";

test("Deve criar um componente normal", function() {
    const inputText = new InputText("country");
    const label = new Label("País: {{ country }}");
    inputText.setValue("Brasil");
    label.setValue("country", "Brasil");
    expect(label.getValue()).toBe("País: Brasil");
});

test("Deve criar um componente reativo", function() {
    const inputText = new InputText("country");
    const label = new Label("País: {{ country }}");
    inputText.register(label);
    inputText.setValue("Brasil");
    expect(label.getValue()).toBe("País: Brasil");
});