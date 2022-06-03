import e from "express";
import DarkButton from "./DarkButton";
import DarkLabel from "./DarkLabel";
import LightButton from "./LightButton";
import Button from "./LightButton";
import LightLabel from "./LightLabel";
import Label from "./LightLabel";
import WidgetFactory from "./WidgetFactory";

export default class View {
    label: Label;
    button: Button;

    constructor(widgetFactory: WidgetFactory) {
        this.label = widgetFactory.createLabel();
        this.button = widgetFactory.createButton();
    }
}