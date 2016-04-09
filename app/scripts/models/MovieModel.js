import Backbone from 'backbone';


const MovieModel = Backbone.Model.extend({
	
	urlRoot: 'https://group-project-movie-tiy.herokuapp.com/api/movies',
	idAttribute: '_id'
});



export default MovieModel;