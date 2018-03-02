const pdrone = require('pdrone');
const temporal = require('temporal');

const drone = pdrone({
  id: 'Mambo_656263',
  debug: true
});


drone.on('connected', function() {

  temporal.queue([
      {
        delay : 1000,
        task : function() {
          console.log(" ===== DECOLLAGE ====");
          drone.takeOff();
        }
      },
      {
        delay : 10000,
        task : function () {
          console.log(" ===== ATTERISSAGE ====");
          drone.land();
        }
      }

    ]);

  // Evenement des capteurs
  drone.on('sensor', function(event) {
    // event.name =>
    //   flatTrimDone, status, alert, claw, gun, position, speed, altitude, quaternion
    // event.value
    //console.log(event)
  });
});
