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

}
