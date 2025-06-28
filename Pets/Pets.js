/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pets extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Pets/costumes/1.svg", {
        x: 11.163917978621157,
        y: 10.537403333333344,
      }),
      new Costume("2", "./Pets/costumes/2.svg", {
        x: 10.436584234866018,
        y: 7.676147867216173,
      }),
      new Costume("3", "./Pets/costumes/3.svg", {
        x: 10.045751105979491,
        y: 14.314061514770287,
      }),
      new Costume("4", "./Pets/costumes/4.svg", {
        x: 9.261538947518659,
        y: 11.14007811909417,
      }),
      new Costume("5", "./Pets/costumes/5.svg", {
        x: 10.45268738767561,
        y: 16.017043801083872,
      }),
      new Costume("6", "./Pets/costumes/6.svg", {
        x: 8.163635572354366,
        y: 8.638856281333148,
      }),
      new Costume("7", "./Pets/costumes/7.svg", {
        x: 4.777390792147656,
        y: 14.68183092203924,
      }),
      new Costume("8", "./Pets/costumes/8.svg", {
        x: 6.369715880569089,
        y: 12.981850922039285,
      }),
      new Costume("9", "./Pets/costumes/9.svg", {
        x: 6.315004670115911,
        y: 6.769608594633013,
      }),
      new Costume("10", "./Pets/costumes/10.svg", {
        x: 6.015732485223339,
        y: 6.214696636701433,
      }),
      new Costume("11", "./Pets/costumes/11.svg", {
        x: 9.05080464201933,
        y: 7.271122997811204,
      }),
      new Costume("12", "./Pets/costumes/12.svg", {
        x: 11.312412042154648,
        y: 10.516460603377993,
      }),
      new Costume("13", "./Pets/costumes/13.svg", {
        x: 8.163634072258105,
        y: 8.656765897452203,
      }),
      new Costume("14", "./Pets/costumes/14.svg", {
        x: 8.163634072258105,
        y: 8.638837179131968,
      }),
      new Costume("15", "./Pets/costumes/15.svg", {
        x: 9.050804642019358,
        y: 7.271117997811189,
      }),
      new Costume("16", "./Pets/costumes/16.svg", {
        x: 8.696027587243293,
        y: 8.911850006877927,
      }),
      new Costume("17", "./Pets/costumes/17.svg", {
        x: 4.172433616302328,
        y: 6.930241756562452,
      }),
    ];

    this.sounds = [new Sound("pop", "./Pets/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.KEY_PRESSED, { key: "9" }, this.whenKey9Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "battleend" },
        this.whenIReceiveBattleend
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Player Attack" },
        this.whenIReceivePlayerAttack
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.testerslot = 0;
    this.goto(-125, -135);
    this.size = 600;
    this.visible = false;
    this.stage.vars.turn = 0;
    this.stage.vars.currentSlot = 0;
    this.stage.vars.ownedpets = [];
    this.stage.vars.ownedpets.push("???");
    this.stage.vars.ownedpets.push("???");
    this.stage.vars.ownedpets.push("Grasy");
    for (let i = 0; i < 11; i++) {
      this.stage.vars.ownedpets.push("???");
      yield;
    }
    this.stage.vars.petatk = [];
    this.stage.vars.pethp = [];
    this.stage.vars.petatk.push(-15);
    this.stage.vars.pethp.push(1);
    this.stage.vars.petatk.push(75);
    this.stage.vars.pethp.push(55);
    this.stage.vars.petatk.push(1);
    this.stage.vars.pethp.push(1);
    this.stage.vars.petatk.push(3);
    this.stage.vars.pethp.push(7);
    this.stage.vars.petatk.push(5);
    this.stage.vars.pethp.push(5);
    this.stage.vars.petatk.push(2);
    this.stage.vars.pethp.push(10);
    this.stage.vars.petatk.push(1);
    this.stage.vars.pethp.push(15);
    this.stage.vars.petatk.push(2);
    this.stage.vars.pethp.push(10);
    this.stage.vars.petatk.push(4);
    this.stage.vars.pethp.push(5);
    this.stage.vars.petatk.push(3);
    this.stage.vars.pethp.push(1);
    this.stage.vars.petatk.push(220);
    this.stage.vars.pethp.push(725);
    this.stage.vars.petatk.push(15);
    this.stage.vars.pethp.push(2);
    this.stage.vars.petatk.push(5);
    this.stage.vars.pethp.push(10);
    this.stage.vars.petatk.push(33);
    this.stage.vars.pethp.push(17);
    this.stage.vars.petatk.push(22);
    this.stage.vars.pethp.push(73);
    this.stage.vars.petatk.push(3);
    this.stage.vars.pethp.push(20);
    this.stage.vars.petatk.push(0.0001);
    this.stage.vars.pethp.push(1.0001);
  }

  *whenGreenFlagClicked2() {
    this.costume = 8;
    while (true) {
      if (this.toNumber(this.stage.vars.battleid) === 0) {
        if (this.keyPressed("1")) {
          yield* this.askAndWait(
            "Which number pet would you like to place in slot 1?"
          );
          if (
            this.toString(
              this.itemOf(this.stage.vars.ownedpets, this.answer - 1)
            ) === "???"
          ) {
            this.stage.vars.ownedpets.splice(0, 1, "Failure");
          } else {
            this.stage.vars.slot1 = this.itemOf(
              this.stage.vars.ownedpets,
              this.answer - 1
            );
            this.stage.vars.atk1 = this.itemOf(
              this.stage.vars.petatk,
              this.answer - 1
            );
            this.stage.vars.hp1 = this.itemOf(
              this.stage.vars.pethp,
              this.answer - 1
            );
          }
        }
        if (this.keyPressed("2")) {
          yield* this.askAndWait(
            "Which number pet would you like to place in slot 2?"
          );
          if (
            this.toString(
              this.itemOf(this.stage.vars.ownedpets, this.answer - 1)
            ) === "???"
          ) {
            this.stage.vars.ownedpets.splice(0, 1, "Failure");
          } else {
            this.stage.vars.slot2 = this.itemOf(
              this.stage.vars.ownedpets,
              this.answer - 1
            );
            this.stage.vars.atk2 = this.itemOf(
              this.stage.vars.petatk,
              this.answer - 1
            );
            this.stage.vars.hp2 = this.itemOf(
              this.stage.vars.pethp,
              this.answer - 1
            );
          }
        }
        if (this.keyPressed("3")) {
          yield* this.askAndWait(
            "Which number pet would you like to place in slot 3?"
          );
          if (
            this.toString(
              this.itemOf(this.stage.vars.ownedpets, this.answer - 1)
            ) === "???"
          ) {
            this.stage.vars.ownedpets.splice(0, 1, "Failure");
          } else {
            this.stage.vars.slot3 = this.itemOf(
              this.stage.vars.ownedpets,
              this.answer - 1
            );
            this.stage.vars.atk3 = this.itemOf(
              this.stage.vars.petatk,
              this.answer - 1
            );
            this.stage.vars.hp3 = this.itemOf(
              this.stage.vars.pethp,
              this.answer - 1
            );
          }
        }
        if (this.keyPressed("4")) {
          yield* this.askAndWait(
            "Which number pet would you like to place in slot 4?"
          );
          if (
            this.toString(
              this.itemOf(this.stage.vars.ownedpets, this.answer - 1)
            ) === "???"
          ) {
            this.stage.vars.ownedpets.splice(0, 1, "Failure");
            if (this.random(1, 100) === 1) {
              this.stage.vars.ownedpets.splice(1, 1, "Success");
            }
          } else {
            this.stage.vars.slot4 = this.itemOf(
              this.stage.vars.ownedpets,
              this.answer - 1
            );
            this.stage.vars.atk4 = this.itemOf(
              this.stage.vars.petatk,
              this.answer - 1
            );
            this.stage.vars.hp4 = this.itemOf(
              this.stage.vars.pethp,
              this.answer - 1
            );
          }
        }
      }
      yield;
    }
  }

  *whenKey9Pressed() {
    this.stage.vars.ownedpets.splice(0, 1, "Failure");
    this.stage.vars.ownedpets.splice(1, 1, "Success");
    this.stage.vars.ownedpets.splice(2, 1, "Grasy");
    this.stage.vars.ownedpets.splice(3, 1, "Aple");
    this.stage.vars.ownedpets.splice(4, 1, "Trey");
    this.stage.vars.ownedpets.splice(5, 1, "Roc");
    this.stage.vars.ownedpets.splice(6, 1, "Peprer");
    this.stage.vars.ownedpets.splice(7, 1, "Belp");
    this.stage.vars.ownedpets.splice(8, 1, "Crystull");
    this.stage.vars.ownedpets.splice(9, 1, "Col");
    this.stage.vars.ownedpets.splice(10, 1, "Dimod");
    this.stage.vars.ownedpets.splice(11, 1, "Paxe");
    this.stage.vars.ownedpets.splice(12, 1, "Pryte");
    this.stage.vars.ownedpets.splice(13, 1, "Goldy");
    this.stage.vars.ownedpets.splice(14, 1, "Quatz");
    this.stage.vars.ownedpets.splice(15, 1, "Chester");
    this.stage.vars.ownedpets.splice(16, 1, "Dropolt");
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.savecode = "nnynnnnn";
    this.createClone();
    yield* this.wait(0.1);
    this.goto(-20, -135);
    this.createClone();
    yield* this.wait(0.1);
    this.goto(80, -135);
    this.createClone();
    yield* this.wait(0.1);
    this.goto(185, -135);
    this.createClone();
    yield* this.wait(0.1);
  }

  *startAsClone() {
    this.visible = true;
    if (this.x === -125) {
      while (true) {
        this.costume =
          this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot1) +
          1;
        if (this.toNumber(this.stage.vars.currentSlot) === 1) {
          if (!(this.compare(this.stage.vars.hp1, 1) < 0)) {
            yield* this.glide(
              0.25,
              this.sprites["Battle"].x,
              this.sprites["Battle"].y
            );
            this.broadcast("Player Attack");
            this.stage.vars.enemyhp += -1 * this.toNumber(this.stage.vars.atk1);
            yield* this.glide(0.25, -125, -135);
            this.stage.vars.turn++;
            this.stage.vars.testerslot = 0;
          } else {
            this.visible = false;
            this.stage.vars.atk1 = 0;
          }
          this.stage.vars.currentSlot = 2;
        }
        yield;
      }
    }
    if (this.x === -20) {
      while (true) {
        this.costume =
          this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot2) +
          1;
        if (this.toNumber(this.stage.vars.currentSlot) === 2) {
          if (!(this.compare(this.stage.vars.hp2, 1) < 0)) {
            yield* this.glide(
              0.25,
              this.sprites["Battle"].x,
              this.sprites["Battle"].y
            );
            this.broadcast("Player Attack");
            this.stage.vars.enemyhp += -1 * this.toNumber(this.stage.vars.atk2);
            yield* this.glide(0.25, -20, -135);
            this.stage.vars.turn++;
            this.stage.vars.testerslot = 0;
          } else {
            this.visible = false;
            this.stage.vars.atk2 = 0;
          }
          this.stage.vars.currentSlot = 3;
        }
        yield;
      }
    }
    if (this.x === 80) {
      while (true) {
        this.costume =
          this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot3) +
          1;
        if (this.toNumber(this.stage.vars.currentSlot) === 3) {
          if (!(this.compare(this.stage.vars.hp3, 1) < 0)) {
            yield* this.glide(
              0.25,
              this.sprites["Battle"].x,
              this.sprites["Battle"].y
            );
            this.broadcast("Player Attack");
            this.stage.vars.enemyhp += -1 * this.toNumber(this.stage.vars.atk3);
            yield* this.glide(0.25, 80, -135);
            this.stage.vars.turn++;
            this.stage.vars.testerslot = 0;
          } else {
            this.visible = false;
            this.stage.vars.atk3 = 0;
          }
          this.stage.vars.currentSlot = 4;
        }
        yield;
      }
    }
    if (this.x === 185) {
      while (true) {
        this.costume =
          this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot4) +
          1;
        if (this.toNumber(this.stage.vars.currentSlot) === 4) {
          if (!(this.compare(this.stage.vars.hp4, 1) < 0)) {
            yield* this.glide(
              0.25,
              this.sprites["Battle"].x,
              this.sprites["Battle"].y
            );
            this.broadcast("Player Attack");
            this.stage.vars.enemyhp += -1 * this.toNumber(this.stage.vars.atk4);
            yield* this.glide(0.25, 185, -135);
            this.stage.vars.turn++;
            this.stage.vars.testerslot = 0;
          } else {
            this.visible = false;
            this.stage.vars.atk3 = 0;
          }
          this.stage.vars.currentSlot = 5;
        }
        yield;
      }
    }
  }

  *whenIReceiveBattleend() {
    this.stage.vars.atk1 = this.itemOf(
      this.stage.vars.petatk,
      this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot1)
    );
    this.stage.vars.hp1 = this.itemOf(
      this.stage.vars.pethp,
      this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot1)
    );
    this.stage.vars.atk2 = this.itemOf(
      this.stage.vars.petatk,
      this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot2)
    );
    this.stage.vars.hp2 = this.itemOf(
      this.stage.vars.pethp,
      this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot2)
    );
    this.stage.vars.atk3 = this.itemOf(
      this.stage.vars.petatk,
      this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot3)
    );
    this.stage.vars.hp3 = this.itemOf(
      this.stage.vars.pethp,
      this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot3)
    );
    this.stage.vars.atk4 = this.itemOf(
      this.stage.vars.petatk,
      this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot4)
    );
    this.stage.vars.hp4 = this.itemOf(
      this.stage.vars.pethp,
      this.indexInArray(this.stage.vars.ownedpets, this.stage.vars.slot4)
    );
  }

  *whenIReceiveWin() {
    if (this.toNumber(this.stage.vars.battleid) === 1) {
      if (this.random(1, 2) === 2) {
        this.stage.vars.ownedpets.splice(2, 1, "Grasy");
      } else {
        this.stage.vars.ownedpets.splice(3, 1, "Aple");
      }
    }
    if (this.toNumber(this.stage.vars.battleid) === 2) {
      if (this.random(1, 2) === 2) {
        this.stage.vars.ownedpets.splice(4, 1, "Trey");
      } else {
        this.stage.vars.ownedpets.splice(5, 1, "Roc");
      }
    }
    if (this.toNumber(this.stage.vars.battleid) === 3) {
      if (this.random(1, 4) === 2) {
        this.stage.vars.ownedpets.splice(6, 1, "Peprer");
      } else {
        this.stage.vars.ownedpets.splice(7, 1, "Belp");
      }
    }
    if (this.toNumber(this.stage.vars.battleid) === 4) {
      if (this.compare(this.random(1, 4), 4) < 0) {
        this.stage.vars.ownedpets.splice(9, 1, "Col");
      } else {
        this.stage.vars.ownedpets.splice(11, 1, "Paxe");
      }
    }
    if (this.toNumber(this.stage.vars.battleid) === 5) {
      this.stage.vars.ownedpets.splice(14, 1, "Quatz");
    }
    if (this.toNumber(this.stage.vars.battleid) === 6) {
      this.stage.vars.ownedpets.splice(8, 1, "Crystull");
    }
    if (this.toNumber(this.stage.vars.battleid) === 7) {
      if (this.compare(this.random(1, 4), 3) < 0) {
        this.stage.vars.ownedpets.splice(5, 1, "Roc");
      } else {
        if (this.random(1, 50) === 50) {
          this.stage.vars.ownedpets.splice(13, 1, "Goldy");
        } else {
          this.stage.vars.ownedpets.splice(12, 1, "Pryte");
        }
      }
    }
    this.stage.vars.turn = 0;
    this.stage.vars.currentSlot = 0;
    this.stage.vars.battleid = 0;
  }

  *whenIReceivePlayerAttack() {
    if (this.toNumber(this.stage.vars.testerslot) === 0) {
      this.stage.vars.testerslot = 1;
      if (this.toNumber(this.stage.vars.currentSlot) === 1) {
        if (this.toString(this.stage.vars.slot1) === "Peprer") {
          this.stage.vars.atk1 += this.toNumber(this.stage.vars.atk1);
        }
        if (this.toString(this.stage.vars.slot1) === "Belp") {
          this.stage.vars.hp1 += this.random(1, 2);
        }
        if (this.toString(this.stage.vars.slot1) === "Col") {
          if (this.random(1, 100) === 50) {
            this.stage.vars.ownedpets.splice(10, 1, "Dimod");
          }
        }
        if (this.toString(this.stage.vars.slot1) === "Chester") {
          this.stage.vars.enemyatk += -1 * this.toNumber(this.stage.vars.hp1);
        }
      }
      if (this.toNumber(this.stage.vars.currentSlot) === 2) {
        if (this.toString(this.stage.vars.slot2) === "Peprer") {
          this.stage.vars.atk2 += this.toNumber(this.stage.vars.atk2);
        }
        if (this.toString(this.stage.vars.slot2) === "Belp") {
          this.stage.vars.hp2 += this.random(1, 2);
        }
        if (this.toString(this.stage.vars.slot2) === "Col") {
          if (this.random(1, 100) === 50) {
            this.stage.vars.ownedpets.splice(10, 1, "Dimod");
          }
        }
        if (this.toString(this.stage.vars.slot2) === "Chester") {
          this.stage.vars.enemyatk += -1 * this.toNumber(this.stage.vars.hp2);
        }
      }
      if (this.toNumber(this.stage.vars.currentSlot) === 3) {
        if (this.toString(this.stage.vars.slot3) === "Peprer") {
          this.stage.vars.atk3 += this.toNumber(this.stage.vars.atk3);
        }
        if (this.toString(this.stage.vars.slot3) === "Belp") {
          this.stage.vars.hp3 += this.random(1, 2);
        }
        if (this.toString(this.stage.vars.slot3) === "Col") {
          if (this.random(1, 100) === 50) {
            this.stage.vars.ownedpets.splice(10, 1, "Dimod");
          }
        }
        if (this.toString(this.stage.vars.slot3) === "Chester") {
          this.stage.vars.enemyatk += -1 * this.toNumber(this.stage.vars.hp3);
        }
      }
      if (this.toNumber(this.stage.vars.currentSlot) === 4) {
        if (this.toString(this.stage.vars.slot4) === "Peprer") {
          this.stage.vars.atk4 += this.toNumber(this.stage.vars.atk4);
        }
        if (this.toString(this.stage.vars.slot4) === "Belp") {
          this.stage.vars.hp4 += this.random(1, 2);
        }
        if (this.toString(this.stage.vars.slot4) === "Col") {
          if (this.random(1, 100) === 50) {
            this.stage.vars.ownedpets.splice(10, 1, "Dimod");
          }
        }
        if (this.toString(this.stage.vars.slot4) === "Chester") {
          this.stage.vars.enemyatk += -1 * this.toNumber(this.stage.vars.hp4);
        }
      }
    }
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.saver.push("n");
    this.stage.vars.saver.push("n");
    this.stage.vars.saver.push("y");
    for (let i = 0; i < 5; i++) {
      this.stage.vars.saver.push("n");
      yield;
    }
    while (true) {
      while (!this.keyPressed("0")) {
        if (
          !(this.toString(this.itemOf(this.stage.vars.ownedpets, 0)) === "???")
        ) {
          this.stage.vars.saver.splice(0, 1, "y");
        }
        if (
          !(this.toString(this.itemOf(this.stage.vars.ownedpets, 1)) === "???")
        ) {
          this.stage.vars.saver.splice(1, 1, "y");
        }
        if (
          !(this.toString(this.itemOf(this.stage.vars.ownedpets, 3)) === "???")
        ) {
          this.stage.vars.saver.splice(3, 1, "y");
        }
        if (
          !(this.toString(this.itemOf(this.stage.vars.ownedpets, 4)) === "???")
        ) {
          this.stage.vars.saver.splice(4, 1, "y");
        }
        if (
          !(this.toString(this.itemOf(this.stage.vars.ownedpets, 5)) === "???")
        ) {
          this.stage.vars.saver.splice(5, 1, "y");
        }
        if (
          !(this.toString(this.itemOf(this.stage.vars.ownedpets, 6)) === "???")
        ) {
          this.stage.vars.saver.splice(6, 1, "y");
        }
        if (
          !(this.toString(this.itemOf(this.stage.vars.ownedpets, 7)) === "???")
        ) {
          this.stage.vars.saver.splice(7, 1, "y");
        }
        this.stage.vars.savecode =
          this.toString(this.itemOf(this.stage.vars.saver, 0)) +
          this.toString(this.itemOf(this.stage.vars.saver, 1)) +
          ("y" + this.toString(this.itemOf(this.stage.vars.saver, 3))) +
          (this.toString(this.itemOf(this.stage.vars.saver, 4)) +
            this.toString(this.itemOf(this.stage.vars.saver, 5)) +
            (this.toString(this.itemOf(this.stage.vars.saver, 6)) +
              this.toString(this.itemOf(this.stage.vars.saver, 7))));
        yield;
      }
      this.stage.vars.savecode =
        this.toString(this.itemOf(this.stage.vars.saver, 0)) +
        this.toString(this.itemOf(this.stage.vars.saver, 1)) +
        ("y" + this.toString(this.itemOf(this.stage.vars.saver, 3))) +
        (this.toString(this.itemOf(this.stage.vars.saver, 4)) +
          this.toString(this.itemOf(this.stage.vars.saver, 5)) +
          (this.toString(this.itemOf(this.stage.vars.saver, 6)) +
            this.toString(this.itemOf(this.stage.vars.saver, 7))));
      yield* this.askAndWait(
        "Input your save code here! Your current save code is: " +
          this.toString(this.stage.vars.savecode)
      );
      if (this.stringIncludes(this.answer, "y")) {
        this.stage.vars.savecode = this.answer;
        if (this.letterOf(this.answer, 0) === "y") {
          this.stage.vars.ownedpets.splice(0, 1, "Failure");
        } else {
          this.stage.vars.ownedpets.splice(0, 1, "???");
        }
        if (this.letterOf(this.answer, 1) === "y") {
          this.stage.vars.ownedpets.splice(1, 1, "Success");
        } else {
          this.stage.vars.ownedpets.splice(1, 1, "???");
        }
        if (this.letterOf(this.answer, 3) === "y") {
          this.stage.vars.ownedpets.splice(3, 1, "Aple");
        } else {
          this.stage.vars.ownedpets.splice(3, 1, "???");
        }
        if (this.letterOf(this.answer, 4) === "y") {
          this.stage.vars.ownedpets.splice(4, 1, "Trey");
        } else {
          this.stage.vars.ownedpets.splice(4, 1, "???");
        }
        if (this.letterOf(this.answer, 5) === "y") {
          this.stage.vars.ownedpets.splice(5, 1, "Roc");
        } else {
          this.stage.vars.ownedpets.splice(5, 1, "???");
        }
        if (this.letterOf(this.answer, 6) === "y") {
          this.stage.vars.ownedpets.splice(6, 1, "Peprer");
        } else {
          this.stage.vars.ownedpets.splice(6, 1, "???");
        }
        if (this.letterOf(this.answer, 7) === "y") {
          this.stage.vars.ownedpets.splice(7, 1, "Belp");
        } else {
          this.stage.vars.ownedpets.splice(7, 1, "???");
        }
        if (this.letterOf(this.answer, 8) === "y") {
          this.stage.vars.ownedpets.splice(8, 1, "Crystull");
        } else {
          this.stage.vars.ownedpets.splice(8, 1, "???");
        }
        if (this.letterOf(this.answer, 9) === "y") {
          this.stage.vars.ownedpets.splice(9, 1, "Col");
        } else {
          this.stage.vars.ownedpets.splice(9, 1, "???");
        }
        if (this.letterOf(this.answer, 10) === "y") {
          this.stage.vars.ownedpets.splice(10, 1, "Dimod");
        } else {
          this.stage.vars.ownedpets.splice(10, 1, "???");
        }
        if (this.letterOf(this.answer, 11) === "y") {
          this.stage.vars.ownedpets.splice(11, 1, "Paxe");
        } else {
          this.stage.vars.ownedpets.splice(11, 1, "???");
        }
        if (this.letterOf(this.answer, 12) === "y") {
          this.stage.vars.ownedpets.splice(12, 1, "Pryte");
        } else {
          this.stage.vars.ownedpets.splice(12, 1, "???");
        }
        if (this.letterOf(this.answer, 13) === "y") {
          this.stage.vars.ownedpets.splice(13, 1, "Goldy");
        } else {
          this.stage.vars.ownedpets.splice(13, 1, "???");
        }
        if (this.letterOf(this.answer, 14) === "y") {
          this.stage.vars.ownedpets.splice(14, 1, "Quatz");
        } else {
          this.stage.vars.ownedpets.splice(14, 1, "???");
        }
        if (this.letterOf(this.answer, 15) === "y") {
          this.stage.vars.ownedpets.splice(15, 1, "Chester");
        } else {
          this.stage.vars.ownedpets.splice(15, 1, "???");
        }
        if (this.letterOf(this.answer, 16) === "y") {
          this.stage.vars.ownedpets.splice(16, 1, "Dropolt");
        } else {
          this.stage.vars.ownedpets.splice(16, 1, "???");
        }
      }
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.toNumber(this.stage.vars.battleid) === 0) {
        this.visible = true;
      }
      yield;
    }
  }
}
