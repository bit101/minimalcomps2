export const RadioButtonGroup = {};

RadioButtonGroup.groups = {};

RadioButtonGroup.getValueForGroup = (group) => {
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
};

RadioButtonGroup._clearGroup = (group) => {
  const rbGroup = RadioButtonGroup.groups[group];
  if (!rbGroup) {
    return;
  }
  for (let i = 0; i < rbGroup.length; i++) {
    const rb = rbGroup[i];
    rb.checked = false;
  }
};

RadioButtonGroup._addToGroup = (group, rb) => {
  if (!RadioButtonGroup.groups[group]) {
    RadioButtonGroup.groups[group] = [];
  }
  RadioButtonGroup.groups[group].push(rb);
};

RadioButtonGroup._getNextInGroup = (group, rb) => {
  const g = RadioButtonGroup.groups[group];
  const index = g.indexOf(rb);
  let result;
  if (index >= g.length - 1) {
    result = g[0];
  } else {
    result = g[index + 1];
  }
  if (result.enabled) {
    return result;
  }
  return RadioButtonGroup.getNextInGroup(group, result);
};

RadioButtonGroup._getPrevInGroup = (group, rb) => {
  const g = RadioButtonGroup.groups[group];
  const index = g.indexOf(rb);
  let result;
  if (index <= 0) {
    result = g[g.length - 1];
  } else {
    result = g[index - 1];
  }
  if (result.enabled) {
    return result;
  }
  return RadioButtonGroup.getPrevInGroup(group, result);
};

