var fs = require('fs');

var nodejieba = require("nodejieba");

nodejieba.load();

fs.readFile('work.txt', 'utf8', function (err, data) {

	if (err) {

		console.log(err);

	}

	var strs = data.split('\n') // 先将读入的日志按照行分为一个书组

		.reduce(function (last, now) {

			nodejieba.cut(now).forEach(function (word) {

				last.push(word);

			});

			return last;

		}, []) // 通过reduce将每行的单词分出来，最终汇总成为一个包含全部单词的数组（有重复）

	.reduce(function (last, now) {

		var index = last[0].indexOf(now);

		if (index === -1) {

			last[0].push(now);

			last[1].push(1);

		} else {

			last[1][index] += 1;

		}

		return last;

	}, [[], []]) // 统计单词的个数，数组第一个元素为存放单词的数组，第二个元素为存放对应单词个数的数组

	.reduce(function (last, now, index, context) {

		var zip = [];

		last.forEach(function (word, i) {

			zip.push([word, context[1][i]])

		});

		return zip;

	}); // 变换数组，变成二维数组，第一列为单词，第二列为单词对应的个数，没有传递给reduce第二个参数，默认为数组的第一个元素

	var stream = fs.createWriteStream("count.txt");

	stream.once('open', function (fd) {

		strs.forEach(function (word) {

			stream.write(word[0] + ',' + word[1] + '\n');

		})

		stream.end();

	});

});
