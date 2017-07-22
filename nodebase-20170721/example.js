var invisible = function () {
  console.log("invisible");
}

module.exports.message = "hi";

exports.say = function () {
  console.log(message);
}