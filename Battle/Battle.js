/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Battle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Battle/costumes/1.svg", {
        x: 22.12685237882789,
        y: 9.5356098537832,
      }),
      new Costume("2", "./Battle/costumes/2.svg", {
        x: 21.389268648753728,
        y: 16.01702647202424,
      }),
      new Costume("3", "./Battle/costumes/3.svg", {
        x: 7.570384784258408,
        y: 16.571415000000002,
      }),
      new Costume("4", "./Battle/costumes/4.svg", {
        x: 14.453232485223367,
        y: 10.68481157195373,
      }),
      new Costume("5", "./Battle/costumes/5.svg", {
        x: 9.050809284038706,
        y: 7.271125995622356,
      }),
      new Costume("6", "./Battle/costumes/6.svg", {
        x: 15.3465009289244,
        y: 6.76984841634345,
      }),
      new Costume("7", "./Battle/costumes/7.svg", {
        x: 17.413633144516183,
        y: 7.013839358263908,
      }),
      new Costume("8", "./Battle/costumes/8.svg", {
        x: 11.99672235601983,
        y: 12.623643882042245,
      }),
    ];

    this.sounds = [new Sound("pop", "./Battle/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "battle" },
        this.whenIReceiveBattle
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(70, 100);
    this.costume = 1;
    this.visible = false;
    while (true) {
      this.moveAhead();
      if (this.compare(this.stage.vars.enemyhp, 1) < 0) {
        this.stage.vars.enemyatk = 0;
        yield* this.wait(0.1);
      }
      yield;
    }
  }

  *whenIReceiveBattle() {
    this.stage.vars.currentSlot = 1;
    this.stage.vars.turn = 0;
    this.costume = this.stage.vars.battleid;
    this.visible = true;
    if (this.toNumber(this.stage.vars.battleid) === 1) {
      this.stage.vars.enemyatk = 4;
      this.stage.vars.enemyhp = 8;
    }
    if (this.toNumber(this.stage.vars.battleid) === 2) {
      this.stage.vars.enemyatk = 7;
      this.stage.vars.enemyhp = 15;
    }
    if (this.toNumber(this.stage.vars.battleid) === 3) {
      this.stage.vars.enemyatk = 3;
      this.stage.vars.enemyhp = 25;
    }
    if (this.toNumber(this.stage.vars.battleid) === 4) {
      this.stage.vars.enemyatk = 21;
      this.stage.vars.enemyhp = 4;
    }
    if (this.toNumber(this.stage.vars.battleid) === 5) {
      this.stage.vars.enemyatk = 220;
      this.stage.vars.enemyhp = 750;
    }
    if (this.toNumber(this.stage.vars.battleid) === 6) {
      this.stage.vars.enemyatk = 12;
      this.stage.vars.enemyhp = 5;
    }
    if (this.toNumber(this.stage.vars.battleid) === 7) {
      this.stage.vars.enemyatk = 11;
      this.stage.vars.enemyhp = 40;
    }
    if (this.toNumber(this.stage.vars.battleid) === 8) {
      this.stage.vars.enemyatk = 0.001;
      this.stage.vars.enemyhp = 20;
    }
    while (true) {
      if (this.toNumber(this.stage.vars.currentSlot) === 5) {
        if (this.compare(this.stage.vars.hp1, 1) > 0) {
          yield* this.glide(0.25, -125, -135);
          this.stage.vars.hp1 += -1 * this.toNumber(this.stage.vars.enemyatk);
        } else {
          this.stage.vars.atk1 = 0;
          if (this.compare(this.stage.vars.hp2, 1) > 0) {
            yield* this.glide(0.25, -20, -135);
            this.stage.vars.hp2 += -1 * this.toNumber(this.stage.vars.enemyatk);
          } else {
            this.stage.vars.atk2 = 0;
            if (this.compare(this.stage.vars.hp3, 1) > 0) {
              yield* this.glide(0.25, 80, -135);
              this.stage.vars.hp3 +=
                -1 * this.toNumber(this.stage.vars.enemyatk);
            } else {
              this.stage.vars.atk3 = 0;
              if (this.compare(this.stage.vars.hp4, 1) > 0) {
                yield* this.glide(0.25, 185, -135);
                this.stage.vars.hp4 +=
                  -1 * this.toNumber(this.stage.vars.enemyatk);
              } else {
                this.stage.vars.atk4 = 0;
                this.stage.vars.currentSlot = 0;
                this.stage.vars.turn = 0;
                this.stage.vars.battleid = 0;
                this.broadcast("battleend");
                this.visible = false;
                return;
              }
            }
          }
        }
        yield* this.glide(0.25, 70, 100);
        this.stage.vars.currentSlot = 1;
        this.stage.vars.turn++;
        if (this.compare(this.stage.vars.enemyhp, 1) < 0) {
          this.stage.vars.enemyatk = 0;
          this.broadcast("battleend");
          this.broadcast("win");
          this.visible = false;
          return;
        }
      }
      yield;
    }
  }
}
