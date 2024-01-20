const languageDictionary = {
    "py": "Python",
    "js": "Javascript",
    "ts": "Typescript",
    "c": "C",
    "cpp": "C++",
    "java": "Java",
    "cs": "C#",
    "php": "PHP",
    "html": "HTML",
    "css": "CSS",
  } as const;
  
  type Language = keyof typeof languageDictionary;
  
  const findLanguageLabel = (key: Language): string => {
    return languageDictionary[key];
  };
  
export { languageDictionary, findLanguageLabel };
export type { Language };
