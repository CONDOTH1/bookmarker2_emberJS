import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  link(){return faker.internet.url();},
  title(){return faker.internet.domainName();},
  about(){return faker.lorem.sentences();},
  public(){return faker.random.boolean();},
  created(){return faker.date.recent();},
});
