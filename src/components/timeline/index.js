import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import NikahIcon from '../../assets/icons/nikah';
import LunchIcon from '../../assets/icons/lunch';

const Timeline = () => {
    return (
        <>
            <h2 style={{ textAlign: 'center', margin: '18px', color: 'white' }}>Wedding Details</h2>
            <VerticalTimeline animate>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: '12px solid  rgb(33, 150, 243)' }}
                    date="Nikah (13-11-2022)"
                    dateClassName="date"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<NikahIcon />}
                >
                    <h4 className="title">NIKAH CEREMONY</h4>
                    <p>Sunday, November 13th, 2022</p>
                    <p className="vertical-timeline-element-subtitle">At sharp 11:00 AM</p>
                    <p>New Andhra Kalyana Mandapam, Rajampeta, Kadapa</p>
                    <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.7829440730648!2d79.14342071475437!3d14.207483890053776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb32505314302fb%3A0x894dab24a439cb24!2sNew%20Andhra%20Kalyanamandapam!5e0!3m2!1sen!2sin!4v1666450185341!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Valima (15-11-2022)"
                    contentArrowStyle={{ borderRight: '12px solid  rgb(33, 150, 243)' }}
                    dateClassName="date"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<LunchIcon />}
                >
                    <h4 className="title">VALIMA CEREMONY</h4>
                    <p>Tuesday, November 15th, 2022</p>
                    <p className="vertical-timeline-element-subtitle">Lunch</p>
                    <p>Rahamathiya Function Hall, Kadapa</p>
                    <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15451.92872509314!2d78.8306597!3d14.4857124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x697999c1c95e2a9c!2sRahamatiya%2C%20Function%20Hall!5e0!3m2!1sen!2sin!4v1666450334376!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    )
}

export default Timeline;