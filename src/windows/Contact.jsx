import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";


const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
        </div>

        <div className="p-5 space-y-5">
            <img 
                src="/images/kevin_2.jpg" 
                alt="Me" 
                className="w-20 h-20 rounded-full" 
            />

            <h3>Let's Connect</h3>
            <p>Have an idea, project, or opportunity in mind? I’m always excited to collaborate, solve problems, and build meaningful digital experiences. Let’s connect.</p>
            <p>kevinnduka1@gmail.com</p>

            <ul>
                {socials.map(({ id, bg, link, icon, text }) => (
                    <li key={id} style={{ backgroundColor: bg }}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text} >
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow