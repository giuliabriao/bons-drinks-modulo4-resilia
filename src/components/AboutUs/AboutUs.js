import React from 'react'
import aboutUsStyle from './AboutUs.module.css'
import aboutUsImage from '../../images/about-us-image.jpg'

function AboutUs() {

    const handleKeyDown = (event) => {
        console.log('A key was pressed', event.keyCode);
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []); //esse efeito irá rodar na primeira montagem e nao depende de ninguem, por isso o array vazio

    return (
        <section className={aboutUsStyle.aboutUsSection}>
            <h1 className={aboutUsStyle.aboutUsTitle}>
                About us
            </h1>
            <img className={aboutUsStyle.aboutUsImage} src={aboutUsImage} />
            <p className={aboutUsStyle.aboutUsParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mauris condimentum, sollicitudin ante vitae, molestie velit. Fusce ullamcorper nibh non luctus suscipit. Duis lacinia ut felis sed venenatis. Nunc vel suscipit ipsum, sed malesuada lacus. Phasellus sed pharetra nisi, non porttitor mauris. Cras nulla elit, molestie sit amet eleifend vel, accumsan id nisi. Nullam ut accumsan nulla. Fusce non metus velit. Aenean mi libero, bibendum non felis sed, sodales aliquam mauris. Suspendisse convallis, ante non faucibus posuere, mi ligula rhoncus quam, in venenatis tortor leo quis ante. Aenean ultricies maximus vestibulum. Duis sed neque in arcu vulputate luctus. Vestibulum aliquam velit sed urna congue, ac dapibus ligula semper. Donec lobortis, ligula nec placerat pretium, nisl justo porta felis, vel lacinia mauris nulla a ex. Maecenas id ex vel neque viverra fermentum. Pellentesque auctor tellus nec sagittis tempor.
            </p>
        </section>
    )
}

export default AboutUs
