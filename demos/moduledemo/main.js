import { Panel, Button, Checkbox, Label, ProgressBar, RadioButton, TextInput, TextArea, HSlider, VSlider, ColorPicker, NumericStepper, Dropdown, Image, TextBox, Canvas } from "./minimalcomps.mjs";

const panel = new Panel(document.body, 40, 40, 580, 400);

new Button(panel, 20, 20, "Button")
new Checkbox(panel, 20, 50, "Checkbox");
new RadioButton(panel, 20, 80, "group", "RadioButton 1", true);
new RadioButton(panel, 20, 100, "group", "RadioButton 2", false);
new RadioButton(panel, 20, 120, "group", "RadioButton 3", false);
new Label(panel, 20, 150, "Label");
new ProgressBar(panel, 20, 180, 30, 100);
new TextInput(panel, 20, 210, "TextInput");
new TextArea(panel, 20, 240, "TextArea");
new HSlider(panel, 20, 370, "HSlider", 40, 0, 100);
new VSlider(panel, 160, 180, "VSlider", 40, 0, 100);

new ColorPicker(panel, 220, 20, "#f00");
new NumericStepper(panel, 220, 50, 20, 0, 100);
const stuff = ["one", "two", "three", "four", "five"];
new Dropdown(panel, 220, 80, stuff, 0);
new Image(panel, 220, 120, "demo.jpg");
new TextBox(panel, 220, 250, "TextBox - a multiline, fixed size text box for displaying non-editable text, including html.").html=true;
const canvas = new Canvas(panel, 350, 20, 200, 100);
canvas.context.lineWidth = 0.5;
canvas.context.beginPath();
for (let i = 0; i < 100; i++) {
  canvas.context.lineTo(Math.random() * 200, Math.random() * 100);
}
canvas.context.stroke();
