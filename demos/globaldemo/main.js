const panel = new mc2.Panel(document.body, 40, 40, 580, 400);

new mc2.Button(panel, 20, 20, "Button");
new mc2.Checkbox(panel, 20, 50, "Checkbox");
new mc2.RadioButton(panel, 20, 80, "group", "RadioButton 1", true);
new mc2.RadioButton(panel, 20, 100, "group", "RadioButton 2", false);
new mc2.RadioButton(panel, 20, 120, "group", "RadioButton 3", false);
new mc2.Label(panel, 20, 150, "Label");
new mc2.ProgressBar(panel, 20, 180, 30, 100);
new mc2.TextInput(panel, 20, 210, "TextInput");
new mc2.TextArea(panel, 20, 240, "TextArea");
new mc2.HSlider(panel, 60, 370, "HSlider", 40, 0, 100);
new mc2.VSlider(panel, 165, 230, "VSlider", 40, 0, 100);

new mc2.ColorPicker(panel, 220, 20, "#f00");
new mc2.NumericStepper(panel, 220, 50, 20, 0, 100);
const stuff = ["one", "two", "three", "four", "five"];
new mc2.Dropdown(panel, 220, 80, stuff, 0);
new mc2.Image(panel, 220, 120, "demo.jpg");
new mc2.TextBox(panel, 220, 250, "TextBox - a multiline, fixed size text box for displaying non-editable text, including html.").html=true;
const canvas = new mc2.Canvas(panel, 350, 20, 200, 100);
canvas.context.lineWidth = 0.5;
canvas.context.beginPath();
for (let i = 0; i < 100; i++) {
  canvas.context.lineTo(Math.random() * 200, Math.random() * 100);
}
canvas.context.stroke();
