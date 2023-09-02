
import './myappHead.css';
import zionicon from './zionicon.png'
function MyappHead()
{
    return(
        <header className="myappHead-Container">
            <img src={zionicon} id="mainLogo" alt="nOimg"/>
           <nav> 
            <ul>
                 <li>ABOUT</li>
                <li>PRODUCT</li>
                <li>Q&A</li>
                <li>CONTACT</li>
            </ul>
            <button>Register</button>
            </nav>
        </header>
        
    )
}
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.myappHead-Container');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scroll');
    } else {
      navbar.classList.remove('scroll');
    }
  });
export default MyappHead;