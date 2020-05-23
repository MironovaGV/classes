import Daemon from '../Daemon';

import Swordsman from '../Swordsman';

import Magician from '../Magician';

import Undead from '../Undead';

import Zombie from '../Zombie';

import Bowerman from '../Bowerman';

test('Bowerman class test', () => {
  const person = new Bowerman();
  expect(person.attackDefense).toBe('25/25');
});

test('Zombie class test', () => {
  const person = new Zombie();
  expect(person.attackDefense).toBe('40/10');
});

test('Undead class test', () => {
  const person = new Undead();
  expect(person.attackDefense).toBe('25/25');
});

test('Magician class test', () => {
  const person = new Magician();
  expect(person.attackDefense).toBe('10/40');
});

test('Swordsman class test', () => {
  const person = new Swordsman();
  expect(person.attackDefense).toBe('40/10');
});

test('Daemon class test', () => {
  const person = new Daemon();
  expect(person.attackDefense).toBe('10/40');
});
