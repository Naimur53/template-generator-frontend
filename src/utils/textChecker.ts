const camelCase = /^[a-z][a-zA-Z]*$/;
const testCamelCase = (text: string): boolean => {
  return camelCase.test(text);
};

export const textChecker = { camelCase, testCamelCase };
