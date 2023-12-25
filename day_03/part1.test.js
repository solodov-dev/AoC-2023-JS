import part1 from "./part1";

const testInputs = [
  `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,
  `12.......*..
+.........34
.......-12..
..78........
..*....60...
78..........
.......23...
....90*12...
............
2.2......12.
.*.........*
1.1.......56`,
  `........
.24..4..
......*.`,
];

const testOutputs = [4361, 413, 4];

test("part1", () => {
  testInputs.forEach((input, i) => expect(part1(input)).toBe(testOutputs[i]));
});

