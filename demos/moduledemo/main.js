import { Panel, Button, Checkbox, Label, ProgressBar, RadioButton, TextInput, TextArea, HSlider, VSlider, ColorPicker, NumericStepper, Dropdown, Image, TextBox } from "./minimalcomps.mjs";

const panel = new Panel(document.body, 40, 40, 400, 400);

new Button(panel, 20, 20, "Button")
new Checkbox(panel, 20, 50, "Checkbox");
new RadioButton(panel, 20, 80, "group", "RadioButton 1", true);
new RadioButton(panel, 20, 100, "group", "RadioButton 2", false);
new RadioButton(panel, 20, 120, "group", "RadioButton 3", false);
new Label(panel, 20, 150, "Label");
new ProgressBar(panel, 20, 180, 30, 100);
new TextInput(panel, 20, 210, "TextInput");
new TextArea(panel, 20, 240, "TextArea");
new HSlider(panel, 60, 370, "HSlider", 40, 0, 100);
new VSlider(panel, 165, 230, "VSlider", 40, 0, 100);

new ColorPicker(panel, 250, 20, "#f00");
new NumericStepper(panel, 250, 50, 20, 0, 100);
const stuff = ["one", "two", "three", "four", "five"];
new Dropdown(panel, 250, 80, stuff, 0);
new Image(panel, 250, 120, "demo.jpg");
new TextBox(panel, 250, 250, "TextBox - a multiline, fixed size text box for displaying non-editable text, including html.").html=true;
