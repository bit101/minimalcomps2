export class RadioButtonGroup {
  static groups = {};

  static getValueForGroup(group) {
    const rbGroup = RadioButtonGroup.groups[group];
    if (!rbGroup) {
      return null;
    }
    for (let i = 0; i < rbGroup.length; i++) {
      const rb = rbGroup[i];
      if (rb.checked) {
        return rb.text;
      }
    }
    return null;
  }

  static clearGroup(group) {
    const rbGroup = RadioButtonGroup.groups[group];
    if (!rbGroup) {
      return;
    }
    for (let i = 0; i < rbGroup.length; i++) {
      const rb = rbGroup[i];
      rb.checked = false;
    }
  }

  static addToGroup(group, rb) {
    if (!RadioButtonGroup.groups[group]) {
      RadioButtonGroup.groups[group] = [];
    }
    RadioButtonGroup.groups[group].push(rb);
  }

  static getNextInGroup(group, rb) {
    const g = RadioButtonGroup.groups[group];
    const index = g.indexOf(rb);
    var result;
    if (index >= g.length - 1) {
      result = g[0];
    } else {
      result = g[index + 1];
    }
    if (result.enabled) {
      return result;
    }
    return RadioButtonGroup.getNextInGroup(group, result);
  }

  static getPrevInGroup(group, rb) {
    const g = RadioButtonGroup.groups[group];
    const index = g.indexOf(rb);
    var result;
    if (index <= 0) {
      result = g[g.length - 1];
    } else {
      result = g[index - 1];
    }
    if (result.enabled) {
      return result;
    }
    return RadioButtonGroup.getPrevInGroup(group, result);
  }

}
