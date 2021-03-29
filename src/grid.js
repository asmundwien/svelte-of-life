import { writable, derived } from "svelte/store";

const init = 7;

function createGrid() {
  const { subscribe, set, update } = writable([[]]);

  let width = init;
  let height = init;

  function newRow(length) {
    return new Array(length).fill(null).map((_) => false);
  }

  set(newRow(init).map((_) => newRow(init)));
  setAlive(3, 2, true);
  setAlive(3, 3, true);
  setAlive(3, 4, true);

  function setWidth(i) {
    const diff = i - width;
    width = i;
    const add = () => update((n) => n.map((row) => [...row, ...newRow(diff)]));

    const remove = () => {
      update((n) => {
        const end = n[0].length + diff > 1 ? n[0].length + diff : 1;
        return n.map((row) => row.slice(0, end));
      });
    };

    diff > 0 ? add() : remove();
  }

  function setHeight(i) {
    const diff = i - height;
    height = i;
    const add = () =>
      update((n) => [...n, ...newRow(diff).map(() => newRow(n[0].length))]);

    const remove = () => {
      update((n) => {
        const end = n.length + diff > 1 ? n.length + diff : 1;
        return n.slice(0, end);
      });
    };

    diff > 0 ? add() : remove();
  }

  function setAlive(x, y, value) {
    update((n) => {
      n[y][x] = value;
      return n;
    });
  }

  function evolve() {
    update((n) => {
      const originalCopy = [];
      for (let i = 0; i < n.length; i++) originalCopy[i] = n[i].slice(0);

      const getActiveNeighbours = (x, y) => {
        let count = 0;
        let row;
        row = originalCopy[y - 1];
        if (row)
          count += [row[x - 1], row[x], row[x + 1]].filter((x) => x).length;
        row = originalCopy[y];
        count += [row[x - 1], row[x + 1]].filter((x) => x).length;
        row = originalCopy[y + 1];
        if (row)
          count += [row[x - 1], row[x], row[x + 1]].filter((x) => x).length;
        return count;
      };

      originalCopy.forEach((row, y, grid) =>
        row.forEach((_, x) => {
          const count = getActiveNeighbours(x, y);
          const isAlive = grid[y][x];
          if (!isAlive && count == 3) {
            setAlive(x, y, true);
          } else if (isAlive) {
            setAlive(x, y, count == 2 || count == 2);
          }
        })
      );

      return n;
    });
  }

  function clear() {
    update((n) => n.map((row) => row.map(() => false)));
  }

  return {
    subscribe,
    width: (i) => setWidth(i),
    height: (i) => setHeight(i),
    setAlive,
    evolve,
    clear,
  };
}

export const grid = createGrid();

export const gridWidth = derived(grid, ($grid) => $grid[0].length);
export const gridHeight = derived(grid, ($grid) => $grid.length);
