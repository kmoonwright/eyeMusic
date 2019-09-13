# ![logo] eyeMUSIC

## [View the live site](https://eyemusic.herokuapp.com/ "eyeMUSIC")

**eyeMUSIC** is a single-page, full stack web application inspired by Apple Music and iTunes. Music enthusiasts can enjoy a fully interactive user interface to browse albums, artists, songs, and playlists, all while utilizing the React Music Player for an uninterrupted listening experience.

It utilizes **Ruby On Rails** with a **PostgreSQL** database on the back-end, and **React.js** and **Redux** on the front-end.

## Screenshots


## Key Features

[View the design documents](https://github.com/kmoonwright/eyeMusic_fullstack/wiki "eyeMUSIC Wiki")


### User Authentication
⋅⋅* Users can sign up or log in to use the application
⋅⋅* Users can also log in through a demo account
User credentials are securely hashed, salted, and stored as a password digest

```javascript
class User < ApplicationRecord

    validates :username, :password_digest, :session_token, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    attr_reader :password
    

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end
```

### Search

### Continuous Play

### Upcoming Features
⋅⋅* Playlist customization with playlist images and description
⋅⋅* Radio functionality


[logo]: https://github.com/kmoonwright/eyeMusic_fullstack/blob/master/app/assets/images/icon-eyemusic-logo.png "eyeMUSIC Logo"


Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
