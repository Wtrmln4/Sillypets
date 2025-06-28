import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Map from "./Map/Map.js";
import Player from "./Player/Player.js";
import Collision from "./Collision/Collision.js";
import Zones from "./Zones/Zones.js";
import Decorations from "./Decorations/Decorations.js";
import Pets from "./Pets/Pets.js";
import Enemy from "./Enemy/Enemy.js";
import Battle from "./Battle/Battle.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Map: new Map({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Player: new Player({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  Collision: new Collision({
    x: 0,
    y: -0.33652806952123027,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6,
  }),
  Zones: new Zones({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  Decorations: new Decorations({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8,
  }),
  Pets: new Pets({
    x: 185,
    y: -135,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 8,
    size: 600,
    visible: false,
    layerOrder: 2,
  }),
  Enemy: new Enemy({
    x: -175,
    y: 20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 3,
  }),
  Battle: new Battle({
    x: 70,
    y: 100,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 600,
    visible: false,
    layerOrder: 7,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
