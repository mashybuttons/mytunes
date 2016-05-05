// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

  
  },

  playFirst: function() {
    console.log("playfirst invoked");
    var songq = this;
    

    this.models[0].play();
    this.models.splice(0, 1);

          
    
    
  }


});