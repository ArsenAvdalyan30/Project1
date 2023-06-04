import { faker } from "@faker-js/faker";
import _ from "lodash";
class User {
  constructor(name, email, phone) {
    (this.name = name), (this.email = email), (this.phone = phone);
  }
}

const usersArr = [];
function createRandomUsers(usersArr) {
  for (let i = 0; i < 10; i++) {
    usersArr.push(
      new User(
        faker.person.firstName(),
        faker.internet.email(),
        faker.phone.number()
      )
    );
  }
  return usersArr;
}
console.log(createRandomUsers(usersArr));

function sortByName(arr) {
  const sortedUsersArr = _.sortBy(usersArr, "name");
  return sortedUsersArr;
}
console.log(sortByName(usersArr));

