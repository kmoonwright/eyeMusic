## `users`

 column name     | data type | details

----------------|-----------|-----------------------

`id `             | integer   | not null, primary key

`username  `      | string    | not null, indexed, unique

`email  `      | string    | not null, indexed, unique

`password_digest` | string    | not null

`session_token`   | string    | not null, indexed, unique

`created_at`   | datetime    | not null

`updated_at`   | datetime    | not null

- index on ​username, unique: true
- index on email, unique: true
- index on session_token, unique: true


## `playlists`

 column name     | data type | details

----------------|-----------|-----------------------

`id `             | integer   | not null, primary key

`title  `      | string    | not null, indexed, unique

`password_digest` | string    | not null

`session_token`   | string    | not null, indexed, unique

`created_at`   | datetime    | not null

`updated_at`   | datetime    | not null

​


## `songs`

 column name     | data type | details

----------------|-----------|-----------------------

`id `             | integer   | not null, primary key

`title  `      | string    | not null, indexed, unique

`artist  `      | string    | not null, indexed, unique

`album  `      | string    | not null, indexed, unique

`length` | integer    | not null

`artist_id`   | integer    | not null, indexed, unique

`album_id`   | integer    | not null, indexed, unique

`created_at`   | datetime    | not null

`updated_at`   | datetime    | not null

​