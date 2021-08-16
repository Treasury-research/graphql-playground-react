const ghpages = require("gh-pages");

ghpages.publish("build", function (err) {
  if (err) console.err("err", err);
  console.log("success");
});
