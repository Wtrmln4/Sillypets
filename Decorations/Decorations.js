/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Decorations extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Decorations/costumes/1.svg", {
        x: 218.43768,
        y: 147.93099499999994,
      }),
      new Costume("2", "./Decorations/costumes/2.svg", {
        x: 71.12930396103985,
        y: 89.44890074458176,
      }),
      new Costume("3", "./Decorations/costumes/3.svg", {
        x: 136.4310344827586,
        y: 8.000000000000142,
      }),
    ];

    this.sounds = [new Sound("Meow", "./Decorations/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      this.moveAhead();
      this.costume = this.sprites["Map"].costume.name;
      yield;
    }
  }
}
