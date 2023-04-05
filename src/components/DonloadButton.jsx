import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const DownloadButton = () => {
    return (
        <MotionButton
            as="a"
            href="/static/media/cv.174d8bc4469f8aa7c5fa.webp"
            download=""
            bgGradient="linear(to-r, #12B3EB, #5460F9)"
            px={{ base: "6", md: "8" }}
            py={{ base: "2", md: "3" }}
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            rounded="35px"
            mt={{ base: "4", md: "6" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
        >
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgB7VXRccIwDJV6HcAjhA0yAkzQdAM2aDdoO0HpBFwnACaADcgGwASECcITUTjFl9g+Dv54dzr5FOlZliyHKYK6rnMo55krZi7pVoD0qx7GZyiWI8RrqBPEJ/mFOGQ9GYp9pTiOINh7G8pmLhT0Qg/Ck/jxxJ1bgW5nUHNIpibp/H4gdgz/na4ryLu9PewRr5X035hLBCw9vwIqN6Y3yAF+BfUBATPIUTNPgvhK5pB5yMlBtuqYUTqpxLiYcxJ5jJTVOKXuiMr6g5rGTXpGOoNq+/FHTfNaiO9SiBdYjL2PdoPKkhtSF4gpSZ/AKfUft1OWlJoKlxAGBwRZXrLVzCTLrTlBFYqNTp4hX1FTzyupZpfryb47zQ6VIga98zMlFxRtKVIe+hBGpKcC10ga3CbJZt43dB9cfr5sHp57Qer/cwZ+0yM9HiHHMQAAAABJRU5ErkJggg=="
                alt="icon"
                mr={{ base: "2", md: "4" }}
            />
            Download CV
        </MotionButton>
    );
};

export default DownloadButton;