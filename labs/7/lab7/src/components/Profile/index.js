import React from 'react';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {profile: []};

  }

  componentDidMount() {

    fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "sinclair"}})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
      this.setState({profile: data});
      console.log(this.profile)
    });

  }

  render() {
    return (
      <div> <p>Profile List</p>
       {
      //   this.state.profile.map((value, index) => {
        //   return <p key={index}>{value.name}</p>;
         })
       }
      </div>
    );
  }
}

export default Profile;