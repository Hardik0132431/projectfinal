const UsersList = (props) => {
  return (
    <ul class="list-group list-group-flush">
      {props.users.map((user, index) => (
        <li class="list-group-item" key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};
export default UsersList;
