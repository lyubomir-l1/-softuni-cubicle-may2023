const cubes = [
    {
        id: '2342bh34h2j3b',
        name: 'Mirror Cube',
        description: 'A very cool cube',
        imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg',
        difficultyLevel: 4
    },
    {
        id: '4342bh34h2j3b',
        name: 'Rubic Cube',
        description: 'A nice cube',
        imageUrl: 'https://i.guim.co.uk/img/media/af8ee7ce17c44bfe5672bdd496ada5c0d2305780/0_261_3386_2031/master/3386.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=44ecf20ed1fd69cf7608795abf8e83bb',
        difficultyLevel: 3
    }
];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
const newCube = {
    id: (new Date()).getTime(),
    ...cubeData,
}

cubes.push(newCube);


return newCube;
}