import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../ProjectCards";
import { Box, Button } from "@chakra-ui/react";



import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <Box
            position="absolute"
            top="50%"
            left="-28px"
            transform="translateY(-50%)"
            zIndex={100000}
            fontSize="36px"
        >
            <IconButton
                icon={<ChevronLeftIcon />}
                onClick={onClick}
                variant="ghost"
                colorScheme="blue"
                aria-label="Previous"
                size="large"
            />
        </Box>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <Box
            position="absolute"
            top="50%"
            right="-30px"
            transform="translateY(-50%)"
            zIndex={100000}
            fontSize="36px"
        >
            <IconButton
                icon={<ChevronRightIcon />}
                onClick={onClick}
                variant="ghost"
                colorScheme="blue"
                aria-label="Next"
                size="large"
            />
        </Box>
    );
}

function ProjectSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const projects = [
        {
            title: 'Airbnb Clone',
            startDate: '01/2023',
            endDate: '01/2023',
            description:
                'Worked with a team of 5 to develop a web application that mimicked Airbnb online marketplace using HTML, CSS, and JavaScript. Communicated with team members remotely to complete the project in a limited time.',
            techStack: 'HTML, CSS, JavaScript',
            achievements: 'Contributed to the development of a functional online marketplace clone.',
        },
        {
            title: 'Airbnb Clones',
            startDate: '01/2023',
            endDate: '01/2023',
            description:
                'Worked with a team of 5 to develop a web application that mimicked Airbnb online marketplace using HTML, CSS, and JavaScript. Communicated with team members remotely to complete the project in a limited time.',
            techStack: 'HTML, CSS, JavaScript',
            achievements: 'Contributed to the development of a functional online marketplace clone.',
        },
        {
            title: 'Airbnb Clonesa',
            startDate: '01/2023',
            endDate: '01/2023',
            description:
                'Worked with a team of 5 to develop a web application that mimicked Airbnb online marketplace using HTML, CSS, and JavaScript. Communicated with team members remotely to complete the project in a limited time.',
            techStack: 'HTML, CSS, JavaScript',
            achievements: 'Contributed to the development of a functional online marketplace clone.',
        },
        // Add more projects here
    ];

    return (
        <Box>
            <Slider {...settings}>
                {projects.map((project) => (
                    <ProjectItem key={project.title} {...project} />
                ))}
            </Slider>
        </Box>



    );
}


export default ProjectSlider;
