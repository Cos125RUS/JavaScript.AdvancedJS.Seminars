'use strict'

const lessons = new Map();
const students = new Map();

lessons.set('Математика', 'Фёдор Анатольевич');
lessons.set('Информатика', 'Геннадий Леонидович');
lessons.set('История', 'Анна Павловна');

students.set('Иванов', new Set().add('Математика').add('Информатика'));
students.set('Петров', new Set().add('Математика').add('История'));
students.set('Сидоров', new Set().add('Информатика').add('История'));

console.log(lessons);
console.log(students);

console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`);
console.log(`Уроки Иванова: ${[...students.get("Иванов")]}`); 