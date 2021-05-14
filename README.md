# minimalcomps2

Minimal UI components for rapid prototyping, experiments and proof of concept projects. 

## Summary

A single-file, drop-in library allowing you to create a quick user interface for experiments or quick ideas.

The aim is for very concise, compact syntax. You can usually create a component, position it, configure it and create and event handler in a single line of code. 

## Example

```
const panel = new Panel(document.body, 40, 40, 200, 200);
new Button(panel, 20, 20, "Click me", () => label.text = input.text);
const input = new TextInput(panel, 20, 50, "hello world");
const label = new Label(panel, 20, 80, "target label");
```

![simple demo](images/simpledemo.png)

The general API for each component is 

```new ComponentName(parent, x, y, <possible other params>, defaultEventHandler);```

No need to worry about styles or layout. Just give everything an absolute x, y position.

## Where we are at

![component list](images/simpledemo2.png)

## Live Demos

[Live Demos](https://bit101.github.io/minimalcomps2/)

## Documentation

[Documentation](https://github.com/bit101/minimalcomps2/wiki)
