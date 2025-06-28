/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Map extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Map/costumes/1.svg", {
        x: 265.97350553038086,
        y: 212.29181951951955,
      }),
      new Costume("2", "./Map/costumes/2.svg", { x: 223.3772, y: 219.382175 }),
      new Costume("3", "./Map/costumes/3.svg", {
        x: 241.39521801801806,
        y: 248.54713572072063,
      }),
      new Costume("4", "./Map/costumes/4.svg", {
        x: 244.39822102102104,
        y: 211.87466749249248,
      }),
      new Costume("5", "./Map/costumes/5.svg", {
        x: 276.84308705705706,
        y: 195.35815097597597,
      }),
    ];

    this.sounds = [new Sound("Meow", "./Map/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Cave" }, this.whenIReceiveCave),
      new Trigger(Trigger.BROADCAST, { name: "Beach" }, this.whenIReceiveBeach),
      new Trigger(Trigger.BROADCAST, { name: "Grass" }, this.whenIReceiveGrass),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Mountain" },
        this.whenIReceiveMountain
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "h" }, this.whenKeyHPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Warehouse" },
        this.whenIReceiveWarehouse
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.ownedpets.visible = false;
    this.stage.watchers.petatk.visible = false;
    this.stage.watchers.pethp.visible = false;
    this.stage.vars.hider = 0;
    this.goto(0, 0);
    this.costume = 1;
    this.moveBehind();
  }

  *whenIReceiveCave() {
    this.costume = 2;
  }

  *whenIReceiveBeach() {
    this.costume = 3;
  }

  *whenIReceiveGrass() {
    this.costume = 1;
  }

  *whenIReceiveMountain() {
    this.costume = 5;
  }

  *whenKeyHPressed() {
    while (!!this.keyPressed("h")) {
      yield;
    }
    if (this.toNumber(this.stage.vars.hider) === 0) {
      this.stage.watchers.ownedpets.visible = true;
      this.stage.watchers.petatk.visible = true;
      this.stage.watchers.pethp.visible = true;
      this.stage.vars.hider = 1;
    } else {
      this.stage.watchers.ownedpets.visible = false;
      this.stage.watchers.petatk.visible = false;
      this.stage.watchers.pethp.visible = false;
      this.stage.vars.hider = 0;
    }
  }

  *whenIReceiveWarehouse() {
    this.costume = 4;
  }
}
