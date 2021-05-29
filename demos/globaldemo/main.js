const {
  Button,
  Canvas, Checkbox, ColorPicker,
  Dropdown,
  HSlider,
  Knob,
  Image,
  Label, LED,
  NumericStepper,
  Panel, ProgressBar,
  RadioButton,
  TextArea, TextBox, TextInput, Toggle,
  VBox, VSlider,
} = mc2;

const panel = new Panel(document.body, 40, 40, 580, 400);

new Button(panel, 20, 20, "Button");
new Checkbox(panel, 20, 50, "Checkbox");
const vbox = new VBox(panel, 20, 80, 10);
new RadioButton(vbox, 0, 0, "group", "RadioButton 1", true);
new RadioButton(vbox, 0, 0, "group", "RadioButton 2", false);
new RadioButton(vbox, 0, 0, "group", "RadioButton 3", false);
new Label(panel, 20, 150, "Label");
new ProgressBar(panel, 20, 180, 30, 100);
new TextInput(panel, 20, 210, "TextInput");
new TextArea(panel, 20, 240, "TextArea");
new HSlider(panel, 20, 370, "HSlider", 40, 0, 100);
new VSlider(panel, 160, 180, "VSlider", 40, 0, 100);

new ColorPicker(panel, 220, 35, "Color Picker", "#f00");
new NumericStepper(panel, 220, 80, "Numeric Stepper", 20, 0, 100);
const stuff = ["one", "two", "three", "four", "five"];
new Dropdown(panel, 220, 110, stuff, -1);
new Image(panel, 220, 140, "demo.jpg");
new TextBox(panel, 220, 250, "TextBox - a multiline, fixed size text box for displaying non-editable text, including html.").html = true;

const canvas = new Canvas(panel, 350, 20, 200, 100);
canvas.context.lineWidth = 0.5;
canvas.context.beginPath();
for (let i = 0; i < 30; i++) {
  canvas.context.beginPath();
  canvas.context.arc(Math.random() * 200, Math.random() * 100, 5 + Math.random() * 20, 0, Math.PI * 2);
  canvas.context.stroke();
}
canvas.context.font = "24px mono";
canvas.context.fillText("Canvas", 2, 22);

new Knob(panel, 355, 150, "Knob", 50, 0, 100);
new Toggle(panel, 350, 240, "Toggle", false);
new LED(panel, 365, 300, "LED", "#f00", true);
