import './profile.css';

const Profile = (props) => {
    return(
        <main className="container">
            <img src={props.picture} alt="student profile pic" className="image-style" />
        </main>
    );
}


export default Profile;