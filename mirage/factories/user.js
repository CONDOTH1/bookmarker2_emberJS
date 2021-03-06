import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  username(){return faker.internet.userName();},
  email(){return faker.internet.email();},
  firstName(){return faker.name.firstName();},
  lastName(){return faker.name.lastName();},
  avatar(){return faker.internet.avatar();},
  isAdmin(){return faker.random.boolean();},
  created(){return faker.date.recent();},
  // afterCreate(user, server) {
  //   server.create('bookmarks', 3, {user});
  // }
});
