// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
   
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

  //song.ended then this.remove(song)
    this.on('ended', function() { 
      console.log("song ended")
      this.remove(this.at(0));
      if (this.length !== 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove(this.at(0));
    });

  },

  playFirst: function() {
    var songq = this;
  
    this.at(0).play();

    
  }

});


