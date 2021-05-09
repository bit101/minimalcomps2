import { Panel, Button, Checkbox, Label, ProgressBar, RadioButton, TextInput, TextArea, HSlider, VSlider } from "./minimalcomps.js";

const panel = new Panel(document.body, 40, 40, 200, 400);

new Button(panel, 20, 20, "Button")
new Checkbox(panel, 20, 50, "Checkbox");
new RadioButton(panel, 20, 80, "group", "RadioButton 1", true);
new RadioButton(panel, 20, 100, "group", "RadioButton 2", false);
new RadioButton(panel, 20, 120, "group", "RadioButton 3", false);
new Label(panel, 20, 150, "Label");
new ProgressBar(panel, 20, 180, 30, 100);
new TextInput(panel, 20, 210, "TextInput");
new TextArea(panel, 20, 240, "TextArea");
new HSlider(panel, 60, 370, 40, 0, 100).addLabels("HSlider");
new VSlider(panel, 165, 230, 40, 0, 100).addLabels("VSlider");
