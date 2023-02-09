import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/api/relatedProducts/37311', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          avgRating: 3.2,
          info: {
            id: 37315,
            name: 'Summer Shirt',
            category: 'Blouse'
          },
          styles: {
            results: [{
              'default?': true,
              original_price: '150',
              photos: [
                {
                  thumbnail_url: 'https://picsum.photos/200/300',
                  url: 'https://picsum.photos/600/800'
                },
                {
                  thumbnail_url: 'https://picsum.photos/300/200',
                  url: 'https://picsum.photos/800/600'
                },
              ]
            }]
          }
        },
        {
          avgRating: 4.5,
          info: {
            id: 37312,
            name: 'Denim Jeans',
            category: 'Pants'
          },
          styles: {
            results: [{
              'default?': false,
              original_price: '90',
              photos: [
                {
                  thumbnail_url: 'https://picsum.photos/400/500',
                  url: 'https://picsum.photos/700/900'
                },
                {
                  thumbnail_url: 'https://picsum.photos/450/350',
                  url: 'https://picsum.photos/850/650'
                },
              ]
            }]
          }
        },
      ])
    );
  }),
];