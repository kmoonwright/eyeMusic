## Top Level State Shape
```js

{
	entities: {
		users: {},
		posts: {}
	},

	session: {
		currentUser: 1

	},

	ui: {
		modalOpen: true

	},

	errors: {
		userErrors: [],
		sessionErrors: [],
		postErrors: []
	}
}

```



```js
{
entities: {
  users: {
    3: {
      id: 3,
      name: 'Andy',
      }
  },

  posts: {
    1: {
      id: 1,
      title: 'post 1',
      authorId: 3,
    },
    2: {
      id: 2,
      title: 'post 2',
      authorId: 3,
    }
  },

  postLikes: {
  	1: {
    	id: 1,
      userId: 3,
      postId: 4
    }
  }
}
}
```