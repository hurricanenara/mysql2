const { execute } = require("./execute");

/*
✋ 연습문제 룰:
  1. Prepared statement 쓰기
  2. Test suite에서 던지는 에러 읽기
  3. 구글링하기
*/

/*
👍 Example
France의 인구를 추출하세요
추출할 칼럼: name, population
*/
const selectPopulationOfFrance = () => {
  // Prepared statement를 활용해봅니다
  // Prepared statement가 무엇인지 구글링해보고 간단하게 정리해보세요
  const sql = `SELECT name, population FROM country WHERE name = ?`;

  return execute(sql, ["France"]);
};

/*
Germany의 인구를 추출하세요
추출할 칼럼: name, population
*/
const selectPopulationOfGermany = () => {
  const sql = ``;

  return execute(sql, []);
};

/*
surfacearea가 2000보다 작고 gnp는 700보다 큰 나라들을 추출하세요
추출할 칼럼: name, continent, gnp
*/
const smallWithHighGNP = () => {
  const sql = ``;

  return execute(sql, []);
};

/*
Sweden, Norway, Denmark의 인구를 추출하세요
Required: IN절 활용하기
추출할 칼럼: name, population
*/
const scandinavia = () => {
  const sql = ``;

  return execute(sql, []);
};

/*
G로 시작하는 나라들만 추출하세요
추출할 칼럼: name
*/
const startsWithG = () => {
  const sql = ``;

  return execute(sql, []);
};

/*
y로 끝나는 나라들만 추출하세요
추출할 칼럼: name
*/
const endsWithY = () => {
  const sql = ``;

  return execute(sql, []);
};

/*
인구가 제일 많은 나라 10곳을 인구 내림차순으로 추출하세요
추출할 칼럼: name, population
*/
const top10BiggestInPopulation = () => {
  const sql = ``;

  return execute(sql, []);
};

/*
평균수명이 제일 긴 나라 5곳을 평균수명 내림차순으로 추출하세요
추출할 칼럼 name, lifeexpectancy
*/
const top5LongestLifeExpectancy = () => {
  const sql = ``;

  return execute(sql, []);
};

/*
인구가 제일 작은 나라 10곳을 인구 오름차순으로 추출하세요
추출할 칼럼: name, population
hint: population이 0인 나라는 제외
*/
const top10SmallestInPopulation = () => {
  const sql = ``;

  return execute(sql, []);
};

// BONUS: subquery 활용해보기
/*
프랑스의 인구보다 인구가 많은 나라들만 추출해보세요
추출할 칼럼: name, population
hint: select안 select를 활용해봅니다
*/
const largerThanFrance = () => {
  const sql = ``;

  return execute(sql, []);
};

module.exports = {
  selectPopulationOfFrance,
  selectPopulationOfGermany,
  smallWithHighGNP,
  scandinavia,
  startsWithG,
  endsWithY,
  top10BiggestInPopulation,
  top10SmallestInPopulation,
  top5LongestLifeExpectancy,
  largerThanFrance,
};
