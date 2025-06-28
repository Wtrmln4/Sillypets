/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Enemy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Enemy/costumes/1.svg", {
        x: 22.12685237882789,
        y: 9.5356098537832,
      }),
      new Costume("2", "./Enemy/costumes/2.svg", {
        x: 21.389270871071318,
        y: 16.01702499999999,
      }),
      new Costume("3", "./Enemy/costumes/3.svg", {
        x: 7.5703840247078915,
        y: 16.57141284101735,
      }),
      new Costume("4", "./Enemy/costumes/4.svg", {
        x: 14.453232485223367,
        y: 10.68481157195373,
      }),
      new Costume("5", "./Enemy/costumes/5.svg", {
        x: 9.050804642019358,
        y: 7.271117997811189,
      }),
      new Costume("6", "./Enemy/costumes/6.svg", {
        x: 15.3465009289244,
        y: 6.76984841634345,
      }),
      new Costume("7", "./Enemy/costumes/7.svg", {
        x: 17.413633144516183,
        y: 7.013839358263908,
      }),
      new Costume("8", "./Enemy/costumes/8.svg", {
        x: 11.996722586991325,
        y: 12.62364146086776,
      }),
    ];

    this.sounds = [new Sound("pop", "./Enemy/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Grass" }, this.whenIReceiveGrass),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Grass" },
        this.whenIReceiveGrass2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Cave" }, this.whenIReceiveCave),
      new Trigger(Trigger.BROADCAST, { name: "Cave" }, this.whenIReceiveCave2),
      new Trigger(Trigger.BROADCAST, { name: "Beach" }, this.whenIReceiveBeach),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = 1;
    this.visible = false;
    this.stage.vars.battleid = 0;
    this.stage.vars.slot1 = "Grasy";
    this.stage.vars.slot2 = "Grasy";
    this.stage.vars.slot3 = "Grasy";
    this.stage.vars.slot4 = "Grasy";
    this.stage.vars.hp1 = 1;
    this.stage.vars.hp2 = 1;
    this.stage.vars.hp3 = 1;
    this.stage.vars.hp4 = 1;
    this.stage.vars.atk1 = 1;
    this.stage.vars.atk2 = 1;
    this.stage.vars.atk3 = 1;
    this.stage.vars.atk4 = 1;
    yield* this.wait(0.01);
    this.broadcast("Grass");
  }

  *whenGreenFlagClicked2() {
    this.deleteThisClone();
  }

  *whenIReceiveGrass() {
    yield* this.wait(0.1);
    this.costume = 1;
    this.goto(130, 10);
    this.createClone();
    yield* this.wait(0.01);
    this.costume = 2;
    this.goto(0, 80);
    this.createClone();
    yield* this.wait(0.01);
    this.costume = 3;
    this.goto(-175, 20);
    this.createClone();
    yield* this.wait(0.01);
  }

  *startAsClone() {
    this.visible = true;
    if (this.toNumber(this.costume.name) === 1) {
      while (true) {
        while (
          !(
            this.touching(this.sprites["Player"].andClones()) &&
            this.keyPressed("space")
          )
        ) {
          yield;
        }
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.stage.vars.battleid = 1;
        this.broadcast("battle");
        while (!(this.toNumber(this.stage.vars.battleid) === 0)) {
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.costume.name) === 2) {
      while (true) {
        while (
          !(
            this.touching(this.sprites["Player"].andClones()) &&
            this.keyPressed("space")
          )
        ) {
          yield;
        }
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.stage.vars.battleid = 2;
        this.broadcast("battle");
        while (!(this.toNumber(this.stage.vars.battleid) === 0)) {
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.costume.name) === 3) {
      while (true) {
        while (
          !(
            this.touching(this.sprites["Player"].andClones()) &&
            this.keyPressed("space")
          )
        ) {
          yield;
        }
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.stage.vars.battleid = 3;
        this.broadcast("battle");
        while (!(this.toNumber(this.stage.vars.battleid) === 0)) {
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.costume.name) === 4) {
      while (true) {
        while (
          !(
            this.touching(this.sprites["Player"].andClones()) &&
            this.keyPressed("space")
          )
        ) {
          yield;
        }
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.stage.vars.battleid = 4;
        this.broadcast("battle");
        while (!(this.toNumber(this.stage.vars.battleid) === 0)) {
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.costume.name) === 5) {
      while (true) {
        while (
          !(
            this.touching(this.sprites["Player"].andClones()) &&
            this.keyPressed("space")
          )
        ) {
          yield;
        }
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.stage.vars.battleid = 5;
        this.broadcast("battle");
        while (!(this.toNumber(this.stage.vars.battleid) === 0)) {
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.costume.name) === 6) {
      while (true) {
        while (
          !(
            this.touching(this.sprites["Player"].andClones()) &&
            this.keyPressed("space")
          )
        ) {
          yield;
        }
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.stage.vars.battleid = 6;
        this.broadcast("battle");
        while (!(this.toNumber(this.stage.vars.battleid) === 0)) {
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.costume.name) === 7) {
      while (true) {
        while (
          !(
            this.touching(this.sprites["Player"].andClones()) &&
            this.keyPressed("space")
          )
        ) {
          yield;
        }
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.stage.vars.battleid = 7;
        this.broadcast("battle");
        while (!(this.toNumber(this.stage.vars.battleid) === 0)) {
          yield;
        }
        yield;
      }
    }
    if (this.toNumber(this.costume.name) === 8) {
      while (true) {
        while (
          !(
            this.touching(this.sprites["Player"].andClones()) &&
            this.keyPressed("space")
          )
        ) {
          yield;
        }
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.stage.vars.battleid = 8;
        this.broadcast("battle");
        while (!(this.toNumber(this.stage.vars.battleid) === 0)) {
          yield;
        }
        yield;
      }
    }
  }

  *whenIReceiveGrass2() {
    this.deleteThisClone();
  }

  *whenIReceiveCave() {
    this.deleteThisClone();
  }

  *whenIReceiveCave2() {
    yield* this.wait(0.1);
    this.costume = 4;
    this.goto(190, 5);
    this.createClone();
    yield* this.wait(0.01);
    this.costume = 7;
    this.goto(0, 100);
    this.createClone();
    yield* this.wait(0.01);
    this.costume = 6;
    this.goto(-120, -25);
    this.createClone();
    yield* this.wait(0.01);
    this.costume = 5;
    this.goto(10, 35);
    this.createClone();
    yield* this.wait(0.01);
  }

  *whenIReceiveBeach() {
    yield* this.wait(0.1);
    this.costume = 8;
    this.goto(200, 130);
    this.createClone();
    yield* this.wait(0.01);
    this.costume = 7;
    this.goto(0, 100);
    this.createClone();
    yield* this.wait(0.01);
    this.costume = 6;
    this.goto(-120, -25);
    this.createClone();
    yield* this.wait(0.01);
    this.costume = 5;
    this.goto(10, 35);
    this.createClone();
    yield* this.wait(0.01);
  }
}
