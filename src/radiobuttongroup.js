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
    if (index >= g.length - 1) {
      return g[0];
    }
    return g[index + 1]
  }

  static getPrevInGroup(group, rb) {
    const g = RadioButtonGroup.groups[group];
    const index = g.indexOf(rb);
    if (index <= 0) {
      return g[g.length - 1];
    }
    return g[index - 1]
  }

}
