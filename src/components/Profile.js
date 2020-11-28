import './profile.css';
import Tooltip  from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css'

const Profile = ({name, picture, alignment, aspirations, motto, favorites, animal}) => {
    return(
        <main className={`container ${alignment}`}>            
            <Tooltip placement={alignment==="left"?"right":"left"} 
                    trigger={['hover', 'click','focus']} 
                    overlay={<Content name={name} 
                    aspirations={aspirations} 
                    motto={motto} 
                    favorites={favorites} 
                    animal={animal} 
                    animation="zoom"
            />} 
            
            className="test" >
                <img src={picture} alt="student profile pic" className={`image-style `} />
            </Tooltip>
        </main>
    );
}


const Content = ({name, aspirations, motto, favorites, animal}) => {
    return(
        <main className="content-container">
            <h2>{name}</h2>
            <p>An aspiring developer who wants to {aspirations}. <br />
            Loves {favorites}. <br />
            Spirit animal is the {animal} <br />
            </p>
            <p className="quote">Family Motto: "{motto}"</p>
        </main>
    );
}


export default Profile;