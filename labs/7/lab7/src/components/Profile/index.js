import React from 'react';

class Profile extends React.Component {

  render() {
    return (
      <div> <h2>Profile List</h2>
        { 
        this.props.profile.map((value, index) => {
          return <p key={index}> {value.name}, {value.count}</p> ;
        })
       }
      </div>
    );
  }
}

export default Profile;