const testCamelCase = (text: string): boolean => {
  const camelCase = /^[a-z][a-zA-Z]*$/;
  return camelCase.test(text);
};

export const textChecker = { testCamelCase };
