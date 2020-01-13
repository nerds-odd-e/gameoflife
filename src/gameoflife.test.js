const { x, game_of_life, count_neighbours } = require("./gameoflife");

describe("count neighbours", () => {
  it("empty", () => {
  });
  it("given 3 cells", () => {
    let a_list_of_positions = [[1, 2], [3, 4], [5, 6]];
    game_of_life(a_list_of_positions);
  })
});
