/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Player", "./Player/costumes/Player.svg", {
        x: 8.13490377512207,
        y: 19.01273582196157,
      }),
    ];

    this.sounds = [new Sound("pop", "./Player/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.goto(0, 0);
    this.direction = 90;
    while (true) {
      if (this.toNumber(this.stage.vars.battleid) === 0) {
        if (this.keyPressed("up arrow")) {
          this.direction = 0;
          this.move(3);
        }
        if (this.keyPressed("down arrow")) {
          this.direction = 180;
          this.move(3);
        }
        if (this.keyPressed("right arrow")) {
          this.direction = 90;
          this.move(3);
        }
        if (this.keyPressed("left arrow")) {
          this.direction = -90;
          this.move(3);
        }
        if (this.touching(this.sprites["Collision"].andClones())) {
          this.move(-3);
        }
        if (
          this.compare(this.x, 239) > 0 ||
          this.compare(this.y, 185) > 0 ||
          this.compare(-239, this.x) > 0 ||
          this.compare(-185, this.y) > 0 ||
          !this.touching(this.sprites["Map"].andClones())
        ) {
          this.goto(0, 0);
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.touching(this.sprites["Zones"].andClones()) &&
        this.toNumber(this.sprites["Zones"].costume.name) === 1
      ) {
        if (this.compare(0, this.x) > 0) {
          this.broadcast("Cave");
        } else {
          this.broadcast("Beach");
        }
        this.goto(0, 0);
      }
      if (
        this.touching(this.sprites["Zones"].andClones()) &&
        this.toNumber(this.sprites["Zones"].costume.name) === 2
      ) {
        if (this.compare(0, this.x) > 0) {
          this.broadcast("Mountain");
        } else {
          this.broadcast("Grass");
        }
        this.goto(0, 0);
      }
      yield;
    }
  }
}
