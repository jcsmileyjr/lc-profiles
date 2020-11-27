import './profile.css';
import Tooltip  from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css'

const Profile = ({name, picture, alignment, aspirations, motto, favorites, animal}) => {
    return(
        <main className={`container ${alignment}`}>            
            <Tooltip placement="right" 
                    trigger={['hover', 'click']} 
                    overlay={<Content name={name} 
                    aspirations={aspirations} 
                    motto={motto} 
                    favorites={favorites} 
                    animal={animal} 
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
            <p>An aspiring developer who want to {aspirations}. <br />
            Loves {favorites}. <br />
            Spirit animal is the {animal}. <br />
            </p>
            <quote className="quote">Family Motto: "{motto}"</quote>
        </main>
    );
}


export default Profile;