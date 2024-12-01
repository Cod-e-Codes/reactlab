import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0); // Store the last scroll position
  const headerRef = useRef(null); // Reference to the header Box component

  // Handle scroll event to show/hide the header
  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      // Scroll down
      setIsHeaderVisible(false);
    } else {
      // Scroll up
      setIsHeaderVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event, anchor) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    const headerHeight = 80; // Adjust this value to the height of your header

    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight, // Scroll to the top of the section minus the header height
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isHeaderVisible ? "translateY(0)" : "translateY(-200px)"} // Apply transform based on scroll direction
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000} // Added zIndex to ensure header stays on top
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={(event) => handleClick(event, "projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={(event) => handleClick(event, "contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
