import './profile.css';

const Profile = (props) => {
    return(
        <main className={`container ${props.alignment}`}>
            <img src={props.picture} alt="student profile pic" className={`image-style `} />
        </main>
    );
}


export default Profile;