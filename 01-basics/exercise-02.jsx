/*
React Props : (props -> Properties) mechanism for passing on data from parent component to child component 
Used for building reusable and dynamic react applications 
*/

/*
CHILD Component :
*/
function UserCard({ name, age, isOnline }) {
  return (
    <div>
      <h2>{name || "Guest User"}</h2>
      <p>Age: {age || "Not Provided"}</p>

      {isOnline ? (
        <p style={{ color: "green" }}>🟢 Online</p>
      ) : (
        <p style={{ color: "red" }}>🔴 Offline</p>
      )}
    </div>
  );
}

export default UserCard;

/*
PARENT Component :
*/
<UserCard name="Sumit" age={20} isOnline={true} />


1. Parent Component:
Whatever file/component renders <UserCard />.
Could be App.jsx, could be another component — parent is whoever uses it.

2. Child Component
The component that receives props.
Here function UserCard({name,age, isOnline}){...
}
