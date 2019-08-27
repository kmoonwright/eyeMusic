## `users`
```sh
| column name     | data type | details
|-----------------|-----------|-----------------------|
| `id `            | integer   | not null, primary key

| `username  `     | string    | not null, indexed, unique

| `email  `        | string    | not null, indexed, unique

| `password_digest`| string    | not null

| `session_token`  | string    | not null, indexed, unique

| `created_at`     | datetime  | not null

| `updated_at`     | datetime  | not null

- index on ​username, unique: true
- index on email, unique: true
- index on session_token, unique: true
```

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |



## `songs`
```sh
 column name     | data type | details

----------------|-----------|-----------------------

`id `             | integer   | not null, primary key

`title  `      | string    | not null, indexed, unique

`artist  `      | string    | not null, indexed, unique

`album  `      | string    | not null, indexed, unique

`length` | integer    | not null

`Genre` | string    | not null

`created_at`   | datetime    | not null

`updated_at`   | datetime    | not null

- playlist_id references playlists

- index on playlist_id
```

## `playlists`
```sh
 column name     | data type | details

----------------|-----------|-----------------------

`id `             | integer   | not null, primary key

`title  `      | string    | not null, indexed, unique

`author_id` | integer    | not null

`created_at`   | datetime    | not null

`updated_at`   | datetime    | not null

- author_id references users
- index on playlist_id
```



## `playlist_songs`
```sh
 column name     | data type | details

----------------|-----------|-----------------------

`id `             | integer   | not null, primary key

`song_id  `      | integer    | not null, indexed, unique

`playlist_id  `      | integer    | not null, indexed, unique

`created_at`   | datetime    | not null

`updated_at`   | datetime    | not null

- song_id references songs

- index on song_id

- playlist_id references playlist

- index on playlist_id
```