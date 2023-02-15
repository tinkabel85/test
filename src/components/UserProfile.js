import React from "react";

function UserProfile(props) {
	const { name, bio, userPicture } = props;
	return (
		<div>
			<h3>{name}</h3>
			<p>{bio}</p>
			<img src={userPicture} alt={`${name}' picture`} />
		</div>
	);
}

export default UserProfile;
