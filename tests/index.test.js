const {
  numOfTitlesStartingWithW,
  mostRecentlyReleasedBook,
  booksWithStockHigherThanAvg,
  booksWithLowestStock,
  yearsWithMoreThanOnePublished,
  avgPageLengthOfBooksReleasedEachYear,
  customersWhoHaveYetToOrder,
  biggestSpender,
  studentsEnrolledInPhysics,
  numOfStudentsInEachClass,
} = require("../exercises");

describe("numOfTitlesStartingWithW", () => {
  it("returns the correct result", async () => {
    const result = await numOfTitlesStartingWithW();
    const [dataObject] = result;
    const count = Object.values(dataObject)[0];

    expect(result).toHaveLength(1);
    expect(count).toEqual(3);
  });
});

describe("mostRecentlyReleasedBook", () => {
  it("returns the correct result", async () => {
    const [dataObject] = await mostRecentlyReleasedBook();
    const columns = Object.keys(dataObject);

    expect(columns).toHaveLength(2);
    expect(dataObject.title).toEqual("Lincoln In The Bardo");
    expect(dataObject.released_year).toEqual(2017);
  });
});

describe("booksWithStockHigherThanAvg", () => {
  it("returns the correct result", async () => {
    const [dataObject] = await booksWithStockHigherThanAvg();
    const count = Object.values(dataObject)[0];

    expect(count).toEqual(4);
  });
});

describe("booksWithLowestStock", () => {
  it("returns the correct result", async () => {
    const result = await booksWithLowestStock();
    const stock_quantities = result.map((object) => object.stock_quantity);
    const dataSet = new Set([...stock_quantities]);

    expect(result).toHaveLength(2);
    expect(dataSet.size).toBe(1);
    expect(dataSet.has(12)).toBe(true);
  });
});

describe("yearsWithMoreThanOnePublished", () => {
  it("returns the correct result", async () => {
    const result = await yearsWithMoreThanOnePublished();
    const years = result.map((object) => object.released_year);

    expect(result).toHaveLength(2);
    expect(years).toContain(2003);
    expect(years).toContain(2001);
  });
});

describe("avgPageLengthOfBooksReleasedEachYear", () => {
  it("returns the correct result", async () => {
    const result = await avgPageLengthOfBooksReleasedEachYear();
    const longestAverage = JSON.stringify(result[0]);
    const shortedAverage = JSON.stringify(result[result.length - 1]);

    expect(result).toHaveLength(16);
    expect(longestAverage).toContain("634");
    expect(shortedAverage).toContain("176");
  });
});

describe("customersWhoHaveYetToOrder", () => {
  it("returns the correct result", async () => {
    const result = await customersWhoHaveYetToOrder();
    const customerNames = result.map((object) => object.first_name);

    expect(result).toHaveLength(2);
    expect(customerNames).toContain("Alice");
    expect(customerNames).toContain("John");
  });
});

describe("biggestSpender", () => {
  it("returns the correct result", async () => {
    const result = await biggestSpender();
    const customer = result[0];

    expect(result).toHaveLength(1);
    expect(customer.first_name).toBe("Winnie");
  });
});

describe("studentsEnrolledInPhysics", () => {
  it("returns the correct result", async () => {
    const result = await studentsEnrolledInPhysics();
    const firstNames = result.map((object) => object.first_name);

    expect(result).toHaveLength(3);
    expect(firstNames).toContain("Sally");
    expect(firstNames).toContain("Winnie");
    expect(firstNames).toContain("John");
  });
});

describe("numOfStudentsInEachClass", () => {
  it("returns the correct result", async () => {
    const result = await numOfStudentsInEachClass();

    expect(result).toHaveLength(7);
    expect(JSON.stringify(result)).toContain("0");
  });
});
