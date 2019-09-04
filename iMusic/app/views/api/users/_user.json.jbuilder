json.extract! currentUser, :id, :username
json.date currentUser.created_at.to_date