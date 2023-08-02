const { execute } = require("./execute");

/*
✋ 연습문제 룰:
  1. Prepared statement 쓰기
  2. Test suite에서 던지는 에러 읽기
  3. 구글링하기
*/

// Constants
const BOOKS_DB = "books";
const SHOP_DB = "shop";
const SCHOOL_DB = "school";

/*
 **********************************
 *********  Aggregates  ***********
 **********************************
 */

/*
 W로 시작하는 책의 수를 조회하세요
 */
const numOfTitlesStartingWithW = () => {
  const sql = ``;

  return execute(sql, [], BOOKS_DB);
};

/*
제일 최근에 출판된 책 년도와 책 이름을 조회하세요
칼럼: title, released_year
 */
const mostRecentlyReleasedBook = () => {
  const sql = ``;

  return execute(sql, [], BOOKS_DB);
};

/*
평균 재고보다 재고가 많은 책 수를 구하세요
 */
const booksWithStockHigherThanAvg = () => {
  const sql = ``;

  return execute(sql, [], BOOKS_DB);
};

/*
재고가 제일 낮은 책을 구하세요
칼럼: title, stock_quantity
 */
const booksWithLowestStock = () => {
  const sql = ``;

  return execute(sql, [], BOOKS_DB);
};

/*
 **********************************
 **********  Grouping  ************
 **********************************
 */

/*
1개 이상의 책이 출판된 년도를 조회하세요
칼럼: released_year, <aggregate function column>
 */
const yearsWithMoreThanOnePublished = () => {
  const sql = ``;

  return execute(sql, [], BOOKS_DB);
};

/*
각 년도의 출판된 책의 평균 페이지 수를 조회하고 평균 페이지 칼럼을 내림차순으로 정렬하세요
칼럼: released_year
 */
const avgPageLengthOfBooksReleasedEachYear = () => {
  const sql = ``;

  return execute(sql, [], BOOKS_DB);
};

/*
 **********************************
 ********  One to Many  ***********
 **********************************
 */

/*
 아직 주문을 하지 않은 소비자를 조회하세요
 칼럼: first_name
 */
const customersWhoHaveYetToOrder = () => {
  const sql = ``;

  return execute(sql, [], SHOP_DB);
};

/*
제일 소비를 많이 한 소비자 이름과 소비한 금액을 조회하세요
칼럼: first_name, total_spent
*/
const biggestSpender = () => {
  const sql = ``;

  return execute(sql, [], SHOP_DB);
};

/*
 **********************************
 ********  Many to Many  ***********
 **********************************
 */

/*
Physics를 듣는 수강생을 조회하세요
칼럼: first_name, last_name
 */
const studentsEnrolledInPhysics = () => {
  const sql = `;`;

  return execute(sql, [], SCHOOL_DB);
};

/*
각 강의에 등록한 인원 수를 조회하세요
칼럼: class_name, num_students
조건: 등록 인원이 없는 강의도 포함
*/
const numOfStudentsInEachClass = () => {
  const sql = ``;

  return execute(sql, [], SCHOOL_DB);
};

module.exports = {
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
};
