![splash]
# eyeMUSIC

[View the live site](https://eyemusic.herokuapp.com/ "eyeMUSIC")

**eyeMUSIC** is a single-page, full stack web application inspired by Apple Music and iTunes. Music enthusiasts can enjoy a fully interactive interface to browse albums, artists, songs, and playlists.

The project was built in 10 days, and more features will be added over time.


## Technologies

This project is built with **Ruby On Rails** with a **PostgreSQL** database on the back-end, utilizing Rails ActiveStorage to upload music and image files to Amazon S3. **React.js** and **Redux** on the front-end to implement seamless navigation and dynamic user interfaces.


## Key Features

[View the design documents](https://github.com/kmoonwright/eyeMusic_fullstack/wiki "eyeMUSIC Wiki")

### Browse
* Featured artists and albums showcase link to detail pages
* Playlists can be organized by song, album, or artist parameters

![browse]

### User Authentication
* Users can sign up or log in to use the application
* Users can also log in through a demo account
User credentials are securely hashed, salted, and stored as a password digest

```javascript
class User < ApplicationRecord
  validates :username, :session_token, uniqueness: true
  validates :username, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  
  attr_reader :password
  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
  end
end
```

### Search

* Users can search their entire library for songs, artists, albums, or playlists and watch their results render in real-time. 
* Search results will immediately display in response to state change as the user types.

### Eye Friendly UI with Continuous Play

Songs play continuously in the header music player. When a song is played, other songs are queued depending on the selected index. This queue is maintained by a music player slice of state that stores the current song and queue, and can be accessed by other components elsewhere.

![UI]


### Upcoming Features
* Playlist customization with playlist images and description
* Radio functionality
* Visualizer

[logo]: https://github.com/kmoonwright/eyeMusic_fullstack/blob/master/app/assets/images/icon-eyemusic-logo.png "eyeMUSIC Logo"
[splash]: https://publicchum.s3-us-west-1.amazonaws.com/eyeMusic-splash2.png "eyeMUSIC Splash"
[ui]: https://publicchum.s3-us-west-1.amazonaws.com/eyeMusic-ui.png "eyeMUSIC UI"
[browse]: https://publicchum.s3-us-west-1.amazonaws.com/eyeMusic-splash3.png "eyeMUSIC Browse"

