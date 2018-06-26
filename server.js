const config = require("./knexfile");
const env = "developement";
const knex = require("knex")(config[env]);

knex.select().from('famous_people').then(function(result){
  console.log(result);
});