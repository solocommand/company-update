import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('display', function() {
    this.route('company', { path: 'company/:hash' }, function() {
      this.route('review', { path: ':id' });
    });
  });
});

export default Router;
