## Sample State Shape
```js
{
entities: {
  users: {
    3: {
      id: 3,
      username: 'Kyle',
      email: 'email@email.com',
      password_digest: 'password',
      session_token: 'tokentoken',
      }
  },

  playlists: {
    1: {
      id: 1,
      title: 'Funkalypse',
      author_id: 3,
    },
    2: {
      id: 2,
      title: 'Funk You',
      author_id: 3,
    }
  },

  songs: {
  	4: {
        id: 1,
        title: "She's a Bad Mama Jama",
        artist: 'Carl Carlton',
        album: 'Too Hot'
    }
  	8: {
        id: 8,
        title: 'Virtual Insanity',
        artist: 'Jamiroquai',
        album: 'Traveling Without Moving'
    }
  	12: {
        id: 12,
        title: 'You Sexy Thing',
        artist: 'Hot Chocolate',
        album: 'Hot Chocolate'
    }
  }
}
}
```