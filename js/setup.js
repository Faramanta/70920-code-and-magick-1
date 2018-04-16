'use strict';

var TOTAL_WIZARDS = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYECOLOR = ['black', 'red', 'blue', 'yellow', 'green'];


// Показать окно настроек
document.querySelector('.setup').classList.remove('hidden');

// показать блок Похожих персонажей
document.querySelector('.setup-similar').classList.remove('hidden');

// генерация случайного числа
function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

var wizards = [];

// генерация волшебников
for (var i = 0; i < TOTAL_WIZARDS; i++) {
  var wizard = {
    name: randomItem(WIZARD_NAMES) + ' ' + randomItem(WIZARD_SURNAMES),
    coatColor: randomItem(WIZARD_COATCOLOR),
    eyeColor: randomItem(WIZARD_EYECOLOR)
  };
  wizards.push(wizard);
}

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// шаблон волшебника
var renderWizard = function (wizardsArr) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsArr.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsArr.eyeColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsArr.coatColor;

  return wizardElement;
};

var similarListElement = document.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();
for (i = 0; i < TOTAL_WIZARDS; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
