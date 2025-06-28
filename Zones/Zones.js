/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Zones extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Zones/costumes/1.svg", {
        x: 132.69826790844954,
        y: 146.99999,
      }),
      new Costume("2", "./Zones/costumes/2.svg", {
        x: 144.162135,
        y: 130.66529,
      }),
      new Costume("3", "./Zones/costumes/3.svg", {
        x: 193.00716343155142,
        y: 124.81450156933937,
      }),
    ];

    this.sounds = [new Sound("pop", "./Zones/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.moveAhead();
    while (true) {
      this.costume = this.sprites["Map"].costume.name;
      yield;
    }
  }
}
