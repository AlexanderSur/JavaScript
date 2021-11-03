'use strict';
const numberOFilms=+prompt('Сколько фильмов вы уже посторели','');
const personalMovieDB={
    count:numberOFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
const a=prompt('Один из просмотренных фильмов',''),
    b=prompt('На сколько оцените его',''),
    c=prompt('Один из просмотренных фильмов',''),
    d=prompt('На сколько оцените его','');
console.log(personalMovieDB);