import low from 'lowdb';

// experiment
const db = low();
db.defaults({ users: [] })
  .write();
// end of experiment

export function addUser(payload) {
  db.get('users')
    .push({ username: payload.username, time: payload.time })
    .write();
    console.log(db.get('users').value());
  return {
    type: 'ADD_USER',
    users: db.get('users').value()
  };
}

export function removeUser() {
  return false;
}
