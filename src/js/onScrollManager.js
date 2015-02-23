var _onScrollManager,
    onScrollManager = {

      settings: {
        methods: [],
        scrolled: false
      },

      init: function() {
        _onScrollManager = this.settings;
        this.bindEvents();
        this.triggerMethods();
      },

      bindEvents: function() {
        window.addEventListener('scroll', onScrollManager.scrollGate);
      },

      addMethod: function(id, func) {
        if(typeof(func) === 'function'){
          this.settings.methods.push({id:id,func:func});
        } else {
          console.log('Callback is not function');
        }
      },

      removeMethod: function(id){
        for(var i=0; i<_onScrollManager.methods.length; i++){
          if(_onScrollManager.methods[i].id === id){
            _onScrollManager.methods = _onScrollManager.methods.splice(i,1);
          }
        }
      },

      scrollGate: function(){
        _onScrollManager.scrolled = true;
      },

      triggerMethods: function(){
        setInterval(function(){
          if(_onScrollManager.scrolled){
            _onScrollManager.scrolled = false;
            for(var i=0;i<_onScrollManager.methods.length;i++){
              _onScrollManager.methods[i].func();
            }
          }
        }, 100);
      }

    };

