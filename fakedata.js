var faker = require('faker');

var result = {
  cats: [],
  imageUrl: ['http://localhost:3000/api/image/cat.jpg',
  'http://localhost:3000/api/image/1_mONNI1lG9VuiqovpnYqicA.jpeg',
  'http://localhost:3000/api/image/02-cat-training-NationalGeographic_1484324.jpg',
  'http://localhost:3000/api/image/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
  'http://localhost:3000/api/image/cat2.jpeg',
  'http://localhost:3000/api/image/Cat03.jpg',
  'http://localhost:3000/api/image/cat4.jpeg',
  'http://localhost:3000/api/image/cat5.jpeg',
  'http://localhost:3000/api/image/cat6.jpeg',
  'http://localhost:3000/api/image/cat7.jpg',
  'http://localhost:3000/api/image/cat8.jpeg',
  'http://localhost:3000/api/image/June_odd-eyed-cat_cropped.jpg',
  'http://localhost:3000/api/image/photo-1518791841217-8f162f1e1131.jpeg',
  'http://localhost:3000/api/image/This-Is-Why-Cats-Are-Afraid-of-Cucumbers-760x506.jpg',
  'http://localhost:3000/api/image/what-does-it-mean-when-cat-wags-tail.jpg',],
  imagePreLoadUrl: [
    'http://localhost:3000/api/image/cat_pre.jpg',
    'http://localhost:3000/api/image/1_mONNI1lG9VuiqovpnYqicA_pre.jpg',
    'http://localhost:3000/api/image/02-cat-training-NationalGeographic_1484324_pre.jpg',
    'http://localhost:3000/api/image/A-fluffy-cat-looking-funny-surprised-or-concerned_pre.jpg',
    'http://localhost:3000/api/image/cat2_pre.jpg',
    'http://localhost:3000/api/image/Cat03_pre.jpg',
    'http://localhost:3000/api/image/cat4_pre.jpg',
    'http://localhost:3000/api/image/cat5_pre.jpg',
    'http://localhost:3000/api/image/cat6_pre.jpg',
    'http://localhost:3000/api/image/cat7_pre.jpg',
    'http://localhost:3000/api/image/cat8_pre.jpg',
    'http://localhost:3000/api/image/June_odd-eyed-cat_cropped_pre.jpg',
    'http://localhost:3000/api/image/photo-1518791841217-8f162f1e1131_pre.jpg',
    'http://localhost:3000/api/image/This-Is-Why-Cats-Are-Afraid-of-Cucumbers-760x506_pre.jpg',
    'http://localhost:3000/api/image/what-does-it-mean-when-cat-wags-tail_pre.jpg',
  ],
  getRandom: function(max, min){ return Math.floor(Math.random() * (max - min + 1)) + min},
  makeFake: function() {
    const max = 1000;
    const min = 500;
    for(let i = 1; i < 501; i++){
      let width = this.getRandom(max, min);
      let height = this.getRandom(max, min);
      this.cats[i - 1] = {
        id: i,
        key: i,
        name: faker.name.firstName(),
        created_at: faker.date.past(),
        urls: { 
          small: this.imageUrl[(i - 1) % 15],
          preLoad: this.imagePreLoadUrl[(i - 1) % 15]
        },
        width,
        height,
        views: faker.random.number(),
        likes: faker.random.number(),
        downloads: faker.random.number(),
        alt_description: faker.lorem.word(),
        description: faker.lorem.words(),
      }
    }
  },
  findFake: function(id) {
    if(id){
      return this.cats[id]
    }
    return this.cats;
  }
}

result.makeFake();

module.exports = result;