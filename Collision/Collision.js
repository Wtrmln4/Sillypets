/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Collision extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Collision/costumes/1.svg", {
        x: 224.64166901078713,
        y: 153.0754701852702,
      }),
      new Costume("2", "./Collision/costumes/2.svg", {
        x: 224.64166326853717,
        y: 153.07546783114287,
      }),
      new Costume("3", "./Collision/costumes/3.svg", {
        x: 237.64229768137034,
        y: 180.68306070330695,
      }),
    ];

    this.sounds = [new Sound("Meow", "./Collision/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.moveAhead();
    while (true) {
      this.costume = this.sprites["Map"].costume.name;
      yield;
    }
  }
}
