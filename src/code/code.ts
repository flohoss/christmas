export function randomInRange(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

export const CodeSnippets = [
  ["if (y != 0)", "\tx = y;", "else", "\tx = 0;"],
  ["if (a == 0)", "\ta = 0;"],
  ["function getRandomNumber()", "\treturn 43;"],
  ['printf("Enter a smaller number ");', 'scanf("%d", a);', 'printf("Enter a bigger number ");', 'scanf("%d", b) ;', 'printf("Smaller number is %d", a) ;'],
  ["try {", '\tscanf("%d", a);', "\tcallMethodA();", "} catch(Exception e) {", "\tcallMethodA();", "} finally {", "\tcallMethodA();", "}"],
];
