const { Window, TextInput, Button } = mc2;

const win = new Window(document.body, "Window", 20, 20, 200, 200);
new Button(win, 20, 20, "Hello, world!");
new TextInput(win, 20, 50, "Write on!");
