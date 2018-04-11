'use strict';

var CLOUD_WITH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_X = 130;
var BAR_Y = 250;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_BOT = 10;
var barHeight = -150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WITH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_X + GAP, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 8, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(BAR_X + BAR_GAP * i, BAR_Y - BAR_BOT, BAR_WIDTH, barHeight * times[i] / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), BAR_X + BAR_GAP * i, BAR_Y - 30 + (barHeight * times[i] / maxTime));
    ctx.fillText(names[i], BAR_X + BAR_GAP * i, BAR_Y);
  }
};

