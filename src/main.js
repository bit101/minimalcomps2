import { Panel } from "./module/panel.js";
import { Button } from "./module/button.js";
import { Label } from "./module/label.js";
import { TextInput } from "./module/textinput.js";
import { TextArea } from "./module/textarea.js";


const panel = new Panel(document.body, 40, 40, 400, 400);
new Label(panel, 20, 20, "I am a label...");
new Button(panel, 20, 40, "Click me!", onClick);
const ti = new TextInput(panel, 20, 65, "Hello");
const ta = new TextArea(panel, 20, 90, "Hello");
ta.setSize(200, 50);

function onClick() {
  ti.text = "Goodbye";
}
