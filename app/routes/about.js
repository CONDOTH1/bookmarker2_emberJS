import Ember from 'ember';

let bookmarks = [{
  id: 1,
  title: 'IMDB',
  link: 'https://www.imdb.com',
  about: 'The Internet Movie Database is an online daatabase of information related to films, tv and video games.'
},
{
  id: 2,
  title: 'BBC News',
  link: 'https://www.bbc.co.uk/news',
  about: 'Round up of all the worlds news.'
},
{
  id: 3,
  title: 'The Journal',
  link: 'https://www.thejournel.ie',
  about: null
}];

export default Ember.Route.extend({
  model() {
    return bookmarks;
  }
});
