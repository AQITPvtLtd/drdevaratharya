// hooks/useIsLargeScreen.js
import { useEffect, useState } from 'react';

const useIsLargeScreen = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            if (window.innerWidth >= 1024) {
                setIsLargeScreen(true); // lg breakpoint
            } else {
                setIsLargeScreen(false);
            }
        };

        checkSize(); // Initial check
        window.addEventListener("resize", checkSize);

        return () => window.removeEventListener("resize", checkSize);
    }, []);

    return isLargeScreen;
};

export default useIsLargeScreen;
