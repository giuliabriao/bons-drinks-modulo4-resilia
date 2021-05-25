import React from 'react'
import PersonCard from '../PersonCard/PersonCard'
import ourTeamStyle from './OurTeam.module.css'
import person1 from '../../images/person-1.jpg'
import person2 from '../../images/person-2.jpg'
import person3 from '../../images/person-3.jpg'
import person4 from '../../images/person-4.jpg'

function OurTeam() {
    return (
        <section className={ourTeamStyle.ourTeamContainer}>
            <h1 className={ourTeamStyle.ourTeamTitle}>
                Meet the amazing people behind it all
            </h1>
            <PersonCard imageSrc = {person1} personCardName="Diana Monteiro" personCardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mauris condimentum, sollicitudin ante vitae, molestie velit. Fusce ullamcorper nibh non luctus suscipit. Duis lacinia ut felis sed venenatis. Nunc vel suscipit ipsum, sed malesuada lacus. "/>

            <PersonCard imageSrc = {person2} personCardName="Carolina Ferreira" personCardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mauris condimentum, sollicitudin ante vitae, molestie velit. Fusce ullamcorper nibh non luctus suscipit. Duis lacinia ut felis sed venenatis. Nunc vel suscipit ipsum, sed malesuada lacus. " />

            <PersonCard imageSrc = {person3} personCardName="Gael Del'Monte" personCardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mauris condimentum, sollicitudin ante vitae, molestie velit. Fusce ullamcorper nibh non luctus suscipit. Duis lacinia ut felis sed venenatis. Nunc vel suscipit ipsum, sed malesuada lacus. " />

            <PersonCard imageSrc = {person4} personCardName="Dante Cuervo" personCardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mauris condimentum, sollicitudin ante vitae, molestie velit. Fusce ullamcorper nibh non luctus suscipit. Duis lacinia ut felis sed venenatis. Nunc vel suscipit ipsum, sed malesuada lacus. " />

        </section>
    )
}

export default OurTeam
