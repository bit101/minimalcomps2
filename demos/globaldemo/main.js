const panel = new mc2.Panel(document.body, 40, 40, 400, 400);

new mc2.Button(panel, 20, 20, "Button")
new mc2.Checkbox(panel, 20, 50, "Checkbox");
new mc2.RadioButton(panel, 20, 80, "group", "RadioButton 1", true);
new mc2.RadioButton(panel, 20, 100, "group", "RadioButton 2", false);
new mc2.RadioButton(panel, 20, 120, "group", "RadioButton 3", false);
new mc2.Label(panel, 20, 150, "Label");
new mc2.ProgressBar(panel, 20, 180, 30, 100);
new mc2.TextInput(panel, 20, 210, "TextInput");
new mc2.TextArea(panel, 20, 240, "TextArea");
new mc2.HSlider(panel, 60, 370, 40, 0, 100).addLabels("HSlider");
new mc2.VSlider(panel, 165, 230, 40, 0, 100).addLabels("VSlider");

new mc2.ColorPicker(panel, 250, 20, "#f00");
new mc2.NumericStepper(panel, 250, 50, 20, 0, 100);
const stuff = ["one", "two", "three", "four", "five"];
new mc2.Dropdown(panel, 250, 80, stuff);
image = new mc2.Image(panel, 250, 120, "demo.jpg");
