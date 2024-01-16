const DEFAULT_DESCRIPTION = "Описание недоступно";

export function getSpecial(obj) {
  const result = [];
  obj.special.forEach((item) => {
    const { id, name, description = DEFAULT_DESCRIPTION, icon } = item;
    result.push({ id, name, description, icon });
  });
  return result;
}
