import React from 'react';
import './About.css';
import { Col, Image, Row } from 'react-bootstrap'
import ManipalUniversityImg from '../../assets/images/manipal_university.jpg'
import IEEELogo from '../../assets/images/IEEE_Logo.jpg'
import aboutLogo from '../../assets/images/about.png'

import { MdOutlineLaptopWindows } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

import { MdOutlineDateRange } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import { TbSettingsStar } from "react-icons/tb";
import { BiSolidSchool } from "react-icons/bi";
import { FaPenAlt } from "react-icons/fa";

const About = () => {
  const cardData = [
    {
      logo: MdOutlineLaptopWindows,
      title: 'Hybrid Mode',
      description: 'Dates : 02-03 August 2024'
    },
    {
      logo: FaTrophy,
      title: 'Organized by',
      description: 'Department of Instrumentation & Control Engineering, Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal, Karnataka'
    },
    {
      logo: FaThumbsUp,
      title: 'Conference Theme',
      description: 'Guiding Tomorrow: Emerging Trends in Control, Instrumentation, and Systems Engineering'
    },
  ]

  const aboutData = {
    para1: 'Control Instrumentation Systems conference (CISCON) is a flagship event organized since 2004, by the Instrumentation and Control engineering department at Manipal Institute of Technology Manipal. This conference over the years has become a most sought-after conference and gave platform for both national and international participants to present their research papers and deliberate. Also witnessed many experts from reputed industry/institutes from India/abroad present Keynote/invited lectures. CISCON-2024, XXI edition is planned to be organized during August 02-03, 2024. Through this we anticipate researchers, industry and academic experts’ deliberate challenges and ideas related to current trends in instrumentation, control, and systems engineering. The conference provides attendees and stakeholders a chance to networking while exposing to recent technical advancements and trends.',
    para2: 'In an era marked by rapid technological advancements and complex systems, the theme for CISCON-2024 is set to inspire, challenge, and illuminate the path forward. We are proud to announce our conference theme: "Guiding Tomorrow: Emerging Trends in Control, Instrumentation, and Systems Engineering”. As we sail through the sea of technological change, this theme invites participants to explore and chart the course for the future of control, instrumentation, and systems engineering. The theme underscores the importance of innovation, adaptability, and sustainability in a world where automation, data-driven decision-making, and interconnected systems have become the norm.',
    focusAreas : ['Autonomous system', 'Health informatics', 'Data Science', 'Next gen communication', 'Emerging Technologies' ],
    para3: 'CISCON-2024 aims to provide a platform for sharing research, knowledge, and practical insights to equip the control and instrumentation community with the tools to steer through the challenges and opportunities of the future. We invite you to join us on August 2-3, 2024, to engage in thought-provoking discussions, network with peers, and witness the unveiling of cutting-edge solutions that will shape the future of our field. Come and be part of the journey as we "Navigate the Future" together at CISCON-2024!',
    aboutUs: {
      title: 'Department of Instrumentation and Control Engineering, MIT',
      description: 'The Department of Instrumentation and Control Engineering was started in the year 2001 with an intake of 30 students at Manipal Institute of Technology and today the department has an intake of 120 students per year. The department has a well - equipped Instrumentation lab, Process Instrumentation and Control lab, Transducer Lab, Space Engineering Lab, Control System simulation Lab etc. The department has expertise available in the field of robust control, neural network and fuzzy logic, mobile communications, biomedical instrumentation, adaptive control, electronics & instrumentation, MEMS Hybrid systems and smart sensors. The faculty of the department is involved in active research work in the above emerging fields. The Department is offering following courses',
      courses: ['Control Systems', 'B.Tech - Electronics & Instrumentation Engineering', 'B.Tech - Cyber Physical Systems', 'M.Tech - Embedded Control & Automation', 'M.Tech - Internet of Things'],
      highlights: [
        {
          logo: MdOutlineDateRange,
          title: 'Years',
          count: '20'
        },
        {
          logo: IoPeople,
          title: 'Delegates',
          count: '6000'
        },
        {
          logo: FaMicrophoneAlt,
          title: 'Speakers',
          count: '100'
        },
        {
          logo: TbSettingsStar,
          title: 'Workshops',
          count: '50'
        },
        {
          logo: BiSolidSchool,
          title: 'Institutions',
          count: '500'
        },
        {
          logo: FaPenAlt,
          title: 'Abstracts',
          count: '5000'
        },
      ]
    }
  }
  return (
    <>
      <div className='about_container text-light'>
        {/* 1. Event date  */}
        <Row className='bg_primary m-0'>
          <Col className='p-4 d-flex justify-content-center align-items-center' md="12" lg="6">
            <div className=''>
              <h3>CISCON 2024</h3>
              <h5>02 - 03 August 2024 - Manipal</h5>
              <button className='bg_secondary'>Brochure</button>
              <button className='bg_secondary mx-1'>Gallery</button>
            </div>
          </Col>
          <Col className='p-4' md="12" lg="6">
            <Image className='w-100' src={ManipalUniversityImg} />
          </Col>
        </Row>

        {/* 2. Event Detail */}
        <div className='bg-light'>
          <div className='d-flex justify-content-center'>
            <div className='ieee_logo'>
              <Image className='w-100' src={IEEELogo} />
            </div>
          </div>
          <p className='font_primary text-center'>Welcome to 21st Control Instrumentation Systems Conference</p>
          <Row className='m-0 text-center'>
            {cardData.map((item, index) => {
              const Logo = item.logo;
              return (<Col className='p-2 cursor_pointer' key={index} md={4}>
                <div className={`${index % 2 === 0 ? 'bg_grey text-dark' : 'bg_primary text-light'} p-4 py-5 rounded`}>
                  <div className='card_logo'> 
                    <Logo className={`${index % 2 === 0 ? 'bg_primary text-light' : 'bg_secondary text-dark'} bg_primary rounded p-1`} size={50} />
                  </div>
                  <h5 className='py-4'>{item.title}</h5>
                  <h5>{item.description}</h5>
                </div>
              </Col>)
            })}
          </Row>
        </div>

        {/* 3. About Conference */}
        <div className='about_conference text_grey'>
          <p className='font_primary text-center'>ABOUT THE CONFERENCE</p>
          <p className='color_secondary'>ABOUT CISCON 2024</p>
          <p className='font_secondary'>{aboutData.para1}</p>
          <p className='font_secondary'>{aboutData.para2}</p>
          <p className='font_secondary'>Key Focus Areas</p>
          <ol>
            {aboutData.focusAreas.map((area, index)=> (
              <li key={index}><p className='font_secondary m-0'>{area}</p></li>
            ))}
          </ol>
          <p className='font_secondary'>{aboutData.para3}</p>
        </div>

        {/* 4.About Us */}
        <Row className='m-0'>
          <Col className='p-5' md={6}>
            <p className='font_secondary color_secondary'>About Us</p>
            <p className='font_primary'>{aboutData.aboutUs.title}</p>
            <p className='font_secondary text_grey'>{aboutData.aboutUs.description}</p>
            <ul className='p-0'>
              {aboutData.aboutUs.courses.map((course, index)=> (
                <li key={index}><p className='font_secondary text_grey'>{course}</p></li>
              ))}
            </ul>
            <button className='bg_primary text-light'>Read More</button>
          </Col>
          <Col className='p-5' md={6}>
            <Image className='w-100' src={aboutLogo} />
          </Col>
        </Row>
        <Row className='m-0 bg_primary pb-5 pt-3'>
          {aboutData.aboutUs.highlights.map((highlight, index) => {
            const Logo = highlight.logo;
            return (<Col className='text-center' key={index} md={2}>
                <div className='card_logo'> 
                  <Logo className='color_secondary' size={50} />
                </div>
                <p className='font_primary text-light'>{highlight.count}</p>
                <p className='font_secondary text-light'>{highlight.title}</p>
            </Col>)
          })}
        </Row>

      </div>
    </>
  )
}

export default About