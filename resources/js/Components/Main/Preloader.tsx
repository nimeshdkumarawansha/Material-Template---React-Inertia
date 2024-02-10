import React from "react";
import "@/src/css/pre-loader.css";

interface PreloaderProps {
    loading: boolean;
    onStart: () => void;
    onStop: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ loading, onStart, onStop }) => {
    return (
        loading && (
            <div id="preloader">
                <div className="loader"></div>
            </div>
        )
    );
};

export default Preloader;
